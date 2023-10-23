import { useState } from "react";
import { Character } from "../model/Character.ts";
import {
  getParameters,
  loadCharacter,
  saveCharacter,
} from "../utility/utility.ts";
import { IAttribute, ISkill } from "../types/types.ts";

export const useCharacter = () => {
  const [character, setCharacter] = useState<Character>(new Character());
  const { currentHealth } = getParameters(character);

  const onChangeNickname = (nickname: string) => {
    setCharacter((prev) => ({ ...prev, nickname }));
  };

  const onDecreaseAttributeLevel = (attribute: IAttribute) => {
    const copyCharacter = structuredClone(character);
    copyCharacter.attributes[attribute].value -= 1;

    const attributeValue = copyCharacter.attributes[attribute].value;

    const currentAttributeSkills = Object.values(copyCharacter.skills).filter(
      (skill) => skill.attribute === attribute,
    );

    for (const skill of currentAttributeSkills) {
      if (skill.level > attributeValue) {
        skill.level = attributeValue;
      }
    }

    setCharacter(copyCharacter);
  };

  const onIncreaseAttributeLevel = (attribute: IAttribute) => {
    const copyCharacter = structuredClone(character);
    copyCharacter.attributes[attribute].value += 1;
    setCharacter(copyCharacter);
  };

  const onDecreaseSkillLevel = (skill: ISkill) => {
    const copyCharacter = structuredClone(character);
    copyCharacter.skills[skill].level -= 1;
    setCharacter(copyCharacter);
  };

  const onIncreaseSkillLevel = (skill: ISkill) => {
    const copyCharacter = structuredClone(character);
    copyCharacter.skills[skill].level += 1;
    setCharacter(copyCharacter);
  };

  const takeDamage = () => {
    if (currentHealth - 1 < 0) {
      return;
    }

    const copyCharacter = structuredClone(character);
    copyCharacter.damageTaken += 1;
    setCharacter(copyCharacter);
  };

  const onSaveCharacter = () => {
    saveCharacter(character);
  };

  const onLoadCharacter = () => {
    const loadedCharacter = loadCharacter();

    if (loadedCharacter) {
      setCharacter(loadedCharacter);
    }
  };

  return {
    character,
    currentHealth,
    onChangeNickname,
    onDecreaseSkillLevel,
    onIncreaseSkillLevel,
    onDecreaseAttributeLevel,
    onIncreaseAttributeLevel,
    takeDamage,
    onSaveCharacter,
    onLoadCharacter,
  };
};
