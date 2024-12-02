import { useState, useEffect } from "react";
import GameControls from "./components/GameControls";
import ScoreBoard from "./components/ScoreBoard";
import HangmanFigure from "./components/HangmanFigure";
import Keyboard from "./components/Keyboard";
import GameOverDialog from "./components/GameOverDialog";
import { POINTS_CONFIG } from "./constants/gameConfig";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("ANIMALES");
  const [difficulty, setDifficulty] = useState("easy");
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const maxGuesses = 6; // Máximo número de intentos
  const [remainingGuesses, setRemainingGuesses] = useState(maxGuesses);
  const [gameStatus, setGameStatus] = useState("playing");
  const [showAlert, setShowAlert] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    startNewGame();
  }, [category, difficulty]);

  const getRandomWord = () => {
    const words = require("./constants/gameConfig").WORD_CATEGORIES[category][difficulty];
    return words[Math.floor(Math.random() * words.length)];
  };

  const startNewGame = () => {
    const newWord = getRandomWord();
    setWord(newWord);
    setGuessedLetters(new Set());
    setRemainingGuesses(6);
    setGameStatus("playing");
    setShowAlert(false);
  };

  const guessLetter = (letter) => {
    if (gameStatus !== "playing") return;

    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(letter);
    setGuessedLetters(newGuessedLetters);

    const isCorrectGuess = word.includes(letter);
    if (isCorrectGuess) {
      checkGameStatus(newGuessedLetters);
    } else {
      const newRemainingGuesses = remainingGuesses - 1;
      setRemainingGuesses(newRemainingGuesses);
      if (newRemainingGuesses === 0) {
        setGameStatus("lost");
        handleLoss(); // Manejar pérdida
      }
    }
    updateScore(isCorrectGuess);
  };

  const checkGameStatus = (newGuessedLetters) => {
    const isWon = word
      .split("")
      .filter((char) => char !== " ")
      .every((letter) => newGuessedLetters
        .has(letter));

    if (isWon) {
      setGameStatus("won");
      setScore((prev) => prev + POINTS_CONFIG[difficulty].winBonus);
      setStreak((prev) => prev + 1);
      setShowAlert(true);
    }
  };

  const updateScore = (isCorrect) => {
    if (gameStatus === "lost") return; // Evitar actualizaciones tras perder

    const points = isCorrect
      ? POINTS_CONFIG[difficulty].correctGuess
      : POINTS_CONFIG[difficulty].wrongGuess;

    setScore((prevScore) => {
      const newScore = Math.max(0, prevScore + points);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      return newScore;
    });
  };

  const handleLoss = () => {
    setScore(0); // Reiniciar puntaje al perder la racha
    setStreak(0); // Reiniciar racha
    setShowAlert(true); // Mostrar alerta de fin del juego
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        {/* Scoreboard */}
        <ScoreBoard score={score} highScore={highScore} streak={streak} />

        {/* Game Controls */}
        <GameControls
          category={category}
          setCategory={setCategory}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />

        {/* Hangman Figure */}
        <HangmanFigure remainingGuesses={remainingGuesses} maxGuesses={maxGuesses} />

        {/* Word Display */}
        <p className="text-2xl font-mono mb-4 text-center">
          {word
            .split("")
            .map((letter) =>
              letter === " " ? "\u00A0\u00A0" : guessedLetters.has(letter) ? letter : "_"
            )
            .join(" ")}
        </p>

        {/* Keyboard */}
        <Keyboard
          guessedLetters={guessedLetters}
          gameStatus={gameStatus}
          onGuess={guessLetter}
          word={word}
        />

        {/* Game Over Dialog */}
        <GameOverDialog
          isOpen={showAlert}
          gameStatus={gameStatus}
          word={word}
          score={score}
          streak={streak}
          difficulty={difficulty}
          onNewGame={startNewGame}
        />
      </div>
    </div>
  );
}

export default App;
