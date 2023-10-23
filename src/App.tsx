import { SkillList } from "./components/SkillList/SkillList.tsx";
import { AttributeList } from "./components/AttributeList/AttributeList.tsx";
import { Parameters } from "./components/Parameters/Parameters.tsx";
import { Nickname } from "./components/Nickname/Nickname.tsx";
import { useCharacter } from "./hooks/useCharacter.tsx";
import { Char } from "./components/Char/Char.tsx";
import "./App.scss";

function App() {
  const {
    character,
    currentHealth,
    onChangeNickname,
    onIncreaseSkillLevel,
    onDecreaseSkillLevel,
    onIncreaseAttributeLevel,
    onDecreaseAttributeLevel,
    takeDamage,
    onSaveCharacter,
    onLoadCharacter,
  } = useCharacter();

  return (
    <>
      <Nickname character={character} onChangeNickname={onChangeNickname} />

      <div className="grid">
        <AttributeList
          currentHealth={currentHealth}
          attributes={character.attributes}
          onDecreaseAttributeLevel={onDecreaseAttributeLevel}
          onIncreaseAttributeLevel={onIncreaseAttributeLevel}
        />

        <Parameters character={character} />
        <Char
          currentHealth={currentHealth}
          takeDamage={takeDamage}
          onSaveCharacter={onSaveCharacter}
          onLoadCharacter={onLoadCharacter}
        />

        <SkillList
          skills={character.skills}
          attributes={character.attributes}
          onDecreaseSkillLevel={onDecreaseSkillLevel}
          onIncreaseSkillLevel={onIncreaseSkillLevel}
        />
      </div>
    </>
  );
}

export default App;
