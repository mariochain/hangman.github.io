export const WordDisplay = ({ displayWord, remainingGuesses }) => (
    <div className="text-center mb-8">
        <p className="text-2xl font-mono mb-4">{displayWord}</p>
        <p className="text-lg">Intentos restantes: {remainingGuesses}</p>
    </div>
);