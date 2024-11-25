import { useState, useEffect } from 'react';
import { POINTS_CONFIG, WORD_CATEGORIES } from '../constants/gameConfig';

export function useHangmanGame() {
    const [word, setWord] = useState('');
    const [category, setCategory] = useState('ANIMALES');
    const [difficulty, setDifficulty] = useState('easy');
    const [guessedLetters, setGuessedLetters] = useState(new Set());
    const [remainingGuesses, setRemainingGuesses] = useState(8);
    const [gameStatus, setGameStatus] = useState('playing');
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [streak, setStreak] = useState(0);

    const getRandomWord = (category, difficulty) => {
        const words = WORD_CATEGORIES[category][difficulty];
        return words[Math.floor(Math.random() * words.length)];
    };

    const startNewGame = () => {
        const newWord = getRandomWord(category, difficulty);
        setWord(newWord);
        setGuessedLetters(new Set());
        setRemainingGuesses(POINTS_CONFIG[difficulty].maxGuesses);
        setGameStatus('playing');
    };

    const updateScore = (isCorrect) => {
        const points = isCorrect
            ? POINTS_CONFIG[difficulty].correctGuess
            : POINTS_CONFIG[difficulty].wrongGuess;

        setScore(prevScore => {
            const newScore = Math.max(0, prevScore + points);
            if (newScore > highScore) {
                setHighScore(newScore);
            }
            return newScore;
        });
    };

    const checkGameStatus = (newGuessedLetters) => {
        const isWon = word.split('').every(letter => newGuessedLetters.has(letter));
        if (isWon) {
            setGameStatus('won');
            setScore(prev => prev + POINTS_CONFIG[difficulty].winBonus);
            setStreak(prev => prev + 1);
        }
    };

    const guessLetter = (letter) => {
        if (gameStatus !== 'playing') return;

        const newGuessedLetters = new Set(guessedLetters);
        newGuessedLetters.add(letter);
        setGuessedLetters(newGuessedLetters);

        const isCorrectGuess = word.includes(letter);
        updateScore(isCorrectGuess);

        if (!isCorrectGuess) {
            const newRemainingGuesses = remainingGuesses - 1;
            setRemainingGuesses(newRemainingGuesses);

            if (newRemainingGuesses === 0) {
                setGameStatus('lost');
                setStreak(0);
            }
        } else {
            checkGameStatus(newGuessedLetters);
        }
    };

    useEffect(() => {
        startNewGame();
    }, [category, difficulty]);

    return {
        word,
        category,
        setCategory,
        difficulty,
        setDifficulty,
        guessedLetters,
        remainingGuesses,
        gameStatus,
        score,
        highScore,
        streak,
        guessLetter,
        startNewGame
    };
}