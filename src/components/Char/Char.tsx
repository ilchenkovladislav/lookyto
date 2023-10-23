import "./Char.scss";

interface CharProps {
  currentHealth: number;
  takeDamage: () => void;
  onSaveCharacter: () => void;
  onLoadCharacter: () => void;
}

export const Char = (props: CharProps) => {
  const { onSaveCharacter, onLoadCharacter, takeDamage, currentHealth } = props;

  return (
    <div className="char">
      <h4>Персонаж</h4>
      <div className="char__btns">
        <button onClick={takeDamage} disabled={currentHealth <= 1}>
          Получить урон
        </button>
        <button onClick={onSaveCharacter}>Сохранить персонажа</button>
        <button onClick={onLoadCharacter}>Загрузить персонажа</button>
      </div>
    </div>
  );
};
