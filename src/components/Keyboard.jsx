import { Button } from "./ui/button";

function Keyboard({ guessedLetters, gameStatus, onGuess, word }) {
    const keyboard = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").map((letter) => {
        const isGuessed = guessedLetters.has(letter);
        const isCorrect = word.includes(letter);

        return (
            <Button
                key={letter}
                onClick={() => onGuess(letter)}
                disabled={isGuessed || gameStatus !== "playing"}
                className={`m-1 w-10 h-10 ${isGuessed
                        ? isCorrect
                            ? "bg-green-500 text-white" // Letras correctas en verde
                            : "bg-red-500 text-white" // Letras incorrectas en rojo
                        : "bg-gray-200 hover:bg-blue-100 text-black" // Letras no usadas
                    }`}
            >
                {letter}
            </Button>
        );
    });

    return <div className="flex flex-wrap justify-center gap-1">{keyboard}</div>;
}

export default Keyboard;
