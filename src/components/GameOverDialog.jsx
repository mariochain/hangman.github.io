import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "./ui/alert-dialog";
import { POINTS_CONFIG } from "../constants/gameConfig";

function GameOverDialog({ isOpen, gameStatus, word, score, streak, difficulty, onNewGame }) {
    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {gameStatus === "won" ? "¡Felicitaciones!" : "Fin del Juego"}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {gameStatus === "won"
                            ? `¡Ganaste! ¡Obtuviste ${POINTS_CONFIG[difficulty]?.winBonus} puntos extra!`
                            : `La palabra era: ${word}`}
                        <br />
                        Puntuación actual: {score}
                        <br />
                        Racha actual: {streak}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={onNewGame}>Jugar de Nuevo</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default GameOverDialog;
