import SimpleSelect from "./ui/simpleSelect";
import { WORD_CATEGORIES, DIFFICULTY_LABELS } from "../constants/gameConfig";

function GameControls({ category, setCategory, difficulty, setDifficulty }) {
    const categoryOptions = Object.keys(WORD_CATEGORIES).map((key) => ({
        value: key,
        label: key,
    }));

    const difficultyOptions = Object.keys(DIFFICULTY_LABELS).map((key) => ({
        value: key,
        label: DIFFICULTY_LABELS[key],
    }));

    return (
        <div className="flex justify-center gap-4 mb-8">
            {/* Select de Categoría */}
            <SimpleSelect
                options={categoryOptions}
                value={category}
                onChange={setCategory}
                placeholder="Selecciona categoría"
            />

            {/* Select de Dificultad */}
            <SimpleSelect
                options={difficultyOptions}
                value={difficulty}
                onChange={setDifficulty}
                placeholder="Selecciona dificultad"
            />
        </div>
    );
}

export default GameControls;
