export enum IAttribute {
  strength = "strength",
  agility = "agility",
  intelligence = "intelligence",
  charisma = "charisma",
}

export interface AttributeValue {
  title: string;
  value: number;
}

export enum ISkill {
  attack = "attack",
  stealth = "stealth",
  learnability = "learnability",
  archery = "archery",
  survival = "survival",
  medicine = "medicine",
  intimidation = "intimidation",
  insight = "insight",
  appearance = "appearance",
  manipulation = "manipulation",
}

export interface SkillValue {
  title: string;
  level: number;
  attribute: IAttribute;
}

export type AttributeMap = Record<IAttribute, AttributeValue>;
export type SkillMap = Record<ISkill, SkillValue>;

export interface ICharacter {
  nickname: string;
  damageTaken: number;
  attributes: AttributeMap;
  skills: SkillMap;
}
