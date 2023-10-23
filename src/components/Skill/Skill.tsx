import type { AttributeMap, SkillValue, ISkill } from "../../types/types.ts";
import "./Skill.scss";

interface SkillProps {
  skillValue: SkillValue;
  skill: ISkill;
  attributes: AttributeMap;
  onIncreaseSkillLevel: (skill: ISkill) => void;
  onDecreaseSkillLevel: (skill: ISkill) => void;
}

const skillLevels = [
  "Нетренированный",
  "Новичок",
  "Ученик",
  "Адепт",
  "Эксперт",
  "Мастер",
];

export const Skill = (props: SkillProps) => {
  const {
    skillValue,
    skill,
    attributes,
    onIncreaseSkillLevel,
    onDecreaseSkillLevel,
  } = props;

  const { title, level, attribute } = skillValue;

  const isMaxSkillLevel =
    level >= attributes[attribute].value || level >= skillLevels.length - 1;

  return (
    <div className="skill">
      <button
        disabled={level === 0}
        onClick={() => onDecreaseSkillLevel(skill)}
      >
        -
      </button>
      <div>
        <p className="skill__text">
          {title}: {level}
        </p>
        <span className="skill__level">{skillLevels[level]}</span>
      </div>
      <button
        disabled={isMaxSkillLevel}
        onClick={() => onIncreaseSkillLevel(skill)}
      >
        +
      </button>
    </div>
  );
};
