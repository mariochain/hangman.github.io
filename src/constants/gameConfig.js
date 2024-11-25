export const WORD_CATEGORIES = {
    ANIMALES: {
        easy: ['GATO', 'PERRO', 'RANA', 'PATO', 'PEZ', 'LORO', 'VACA', 'TORO'],
        medium: ['DELFIN', 'CABALLO', 'JIRAFA', 'ELEFANTE', 'GALLINA'],
        hard: ['MURCIELAGO', 'RINOCERONTE', 'HIPOPOTAMO', 'COCODRILO']
    },
    COMIDAS: {
        easy: ['PAPA', 'POLLO', 'SOPA', 'PAN', 'ARROZ', 'TACO'],
        medium: ['PAELLA', 'TORTILLA', 'EMPANADA', 'ENCHILADA'],
        hard: ['GUACAMOLE', 'CHILAQUILES', 'RATATOUILLE', 'CHIMICHANGA']
    },
    PAISES: {
        easy: ['PERU', 'CHILE', 'CUBA', 'ESPAÑA', 'MEXICO'],
        medium: ['COLOMBIA', 'ARGENTINA', 'VENEZUELA', 'PARAGUAY'],
        hard: ['MADAGASCAR', 'UZBEKISTAN', 'KAZAJISTAN', 'KIRGUISTAN']
    },
    REFRANES: {
        easy: [
            'A MAL TIEMPO BUENA CARA',
            'EL TIEMPO ES ORO',
            'OJO POR OJO',
            'A BUEN HAMBRE NO HAY PAN DURO',
            'QUIEN CALLA OTORGA'
        ],
        medium: [
            'NO HAY MAL QUE POR BIEN NO VENGA',
            'QUIEN MUCHO ABARCA POCO APRIETA',
            'MAS VALE PAJARO EN MANO QUE CIEN VOLANDO',
            'NO POR MUCHO MADRUGAR AMANECE MAS TEMPRANO',
            'DEL DICHO AL HECHO HAY MUCHO TRECHO'
        ],
        hard: [
            'A CABALLO REGALADO NO LE MIRES EL DENTADO',
            'CRIA CUERVOS Y TE SACARAN LOS OJOS',
            'EN BOCA CERRADA NO ENTRAN MOSCAS',
            'NO TODO LO QUE BRILLA ES ORO',
            'QUIEN A BUEN ARBOL SE ARRIMA BUENA SOMBRA LE COBIJA'
        ]
    }
};

export const POINTS_CONFIG = {
    easy: {
        correctGuess: 10,
        wrongGuess: -5,
        winBonus: 50,
        maxGuesses: 8
    },
    medium: {
        correctGuess: 20,
        wrongGuess: -10,
        winBonus: 100,
        maxGuesses: 6
    },
    hard: {
        correctGuess: 30,
        wrongGuess: -15,
        winBonus: 150,
        maxGuesses: 4
    }
};

export const DIFFICULTY_LABELS = {
    easy: 'Fácil',
    medium: 'Normal',
    hard: 'Difícil'
};