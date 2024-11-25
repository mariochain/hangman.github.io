function HangmanFigure({ remainingGuesses, maxGuesses }) {
    // Determinar cuántas partes del personaje mostrar
    const wrongGuesses = maxGuesses - remainingGuesses;

    // Partes del personaje (en orden de aparición)
    const parts = [
        <circle key="head" cx="50" cy="25" r="10" className="fill-none stroke-current" strokeWidth="2" />,
        <line key="body" x1="50" y1="35" x2="50" y2="70" className="stroke-current" strokeWidth="2" />,
        <line key="leftArm" x1="50" y1="50" x2="30" y2="40" className="stroke-current" strokeWidth="2" />,
        <line key="rightArm" x1="50" y1="50" x2="70" y2="40" className="stroke-current" strokeWidth="2" />,
        <line key="leftLeg" x1="50" y1="70" x2="30" y2="90" className="stroke-current" strokeWidth="2" />,
        <line key="rightLeg" x1="50" y1="70" x2="70" y2="90" className="stroke-current" strokeWidth="2" />,
    ];

    // Mostrar solo las partes correspondientes a los errores
    const visibleParts = parts.slice(0, wrongGuesses);

    return (
        <svg width="100" height="100" className="mx-auto mb-8">
            {/* Base del ahorcado */}
            <line x1="10" y1="95" x2="90" y2="95" className="stroke-current" strokeWidth="2" />
            <line x1="30" y1="95" x2="30" y2="5" className="stroke-current" strokeWidth="2" />
            <line x1="30" y1="5" x2="50" y2="5" className="stroke-current" strokeWidth="2" />
            <line x1="50" y1="5" x2="50" y2="15" className="stroke-current" strokeWidth="2" />
            {/* Partes visibles del personaje */}
            {visibleParts}
        </svg>
    );
}

export default HangmanFigure;
