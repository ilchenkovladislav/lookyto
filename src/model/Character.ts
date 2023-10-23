import type { ICharacter } from "../types/types.ts";
import { IAttribute } from "../types/types.ts";

export class Character implements ICharacter {
  nickname = "Иван Иванов";
  damageTaken = 0;

  attributes = {
    strength: { title: "Сила", value: 0 },
    agility: { title: "Ловкость", value: 0 },
    intelligence: { title: "Интеллект", value: 0 },
    charisma: { title: "Харизма", value: 0 },
  };

  skills = {
    attack: {
      title: "Атака",
      attribute: IAttribute.strength,
      level: 0,
    },
    stealth: {
      title: "Стелс",
      attribute: IAttribute.agility,
      level: 0,
    },
    archery: {
      title: "Стрельба из лука",
      attribute: IAttribute.agility,
      level: 0,
    },
    learnability: {
      title: "Обучаемость",
      attribute: IAttribute.intelligence,
      level: 0,
    },
    survival: {
      title: "Выживание",
      attribute: IAttribute.intelligence,
      level: 0,
    },
    medicine: {
      title: "Медицина",
      attribute: IAttribute.intelligence,
      level: 0,
    },
    intimidation: {
      title: "Запугивание",
      attribute: IAttribute.charisma,
      level: 0,
    },
    insight: {
      title: "Проницательность",
      attribute: IAttribute.charisma,
      level: 0,
    },
    appearance: {
      title: "Внешний вид",
      attribute: IAttribute.charisma,
      level: 0,
    },
    manipulation: {
      title: "Манипулирование",
      attribute: IAttribute.charisma,
      level: 0,
    },
  };
}
