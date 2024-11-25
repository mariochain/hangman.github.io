import Badge from "./ui/badge";

function ScoreBoard({ score, highScore, streak }) {
    return (
        <div className="flex gap-2">
            <Badge variant="secondary" className="text-lg">
                Puntos: {score}
            </Badge>
            <Badge variant="outline" className="text-lg">
                Récord: {highScore}
            </Badge>
            <Badge variant="primary" className="text-lg">
                Racha: {streak}
            </Badge>
        </div>
    );
}

export default ScoreBoard;
