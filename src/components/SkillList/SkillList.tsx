import type { AttributeMap, ISkill, SkillMap } from "../../types/types.ts";
import { Skill } from "../Skill/Skill.tsx";
import "./SkillList.scss";

interface SkillProps {
  skills: SkillMap;
  attributes: AttributeMap;
  onIncreaseSkillLevel: (skill: ISkill) => void;
  onDecreaseSkillLevel: (skill: ISkill) => void;
}

export const SkillList = (props: SkillProps) => {
  const { skills, attributes, onIncreaseSkillLevel, onDecreaseSkillLevel } =
    props;

  return (
    <div className="skillList">
      <h2 className="skillList__title">Способности</h2>
      {Object.entries(skills).map(([skill, skillValue]) => {
        return (
          <Skill
            skillValue={skillValue}
            skill={skill as ISkill}
            attributes={attributes}
            onIncreaseSkillLevel={onIncreaseSkillLevel}
            onDecreaseSkillLevel={onDecreaseSkillLevel}
            key={skill}
          />
        );
      })}
    </div>
  );
};
