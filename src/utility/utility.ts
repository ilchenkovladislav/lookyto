import { ICharacter } from "../types/types.ts";

const CHARACTER_STORAGE_KEY = "character";

export const saveCharacter = (character: ICharacter) => {
  localStorage.setItem(CHARACTER_STORAGE_KEY, JSON.stringify(character));
};

export const loadCharacter = (): ICharacter | false => {
  try {
    const loadedHero = localStorage.getItem(CHARACTER_STORAGE_KEY);
    if (loadedHero) {
      return JSON.parse(loadedHero);
    }
  } catch (err) {
    console.error(err);
  }

  return false;
};

export const getParameters = (character: ICharacter) => {
  return {
    fullHealth: 3 + character.attributes.strength.value,
    currentHealth:
      3 + character.attributes.strength.value - character.damageTaken,
    evasion: 10 + character.attributes.agility.value,
    energy:
      character.attributes.agility.value +
      character.attributes.intelligence.value,
  };
};
