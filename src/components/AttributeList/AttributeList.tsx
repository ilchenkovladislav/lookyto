import { IAttribute, AttributeMap } from "../../types/types.ts";
import { Attribute } from "../Attribute/Attribute.tsx";
import "./AttributeList.scss";

interface ParameterProps {
  attributes: AttributeMap;
  currentHealth: number;
  onDecreaseAttributeLevel: (attribute: IAttribute) => void;
  onIncreaseAttributeLevel: (attribute: IAttribute) => void;
}

export const AttributeList = (props: ParameterProps) => {
  const {
    attributes,
    onDecreaseAttributeLevel,
    onIncreaseAttributeLevel,
    currentHealth,
  } = props;

  return (
    <div className="attributeList">
      <h2 className="attributeList__title">Базовые параметры</h2>
      {Object.entries(attributes).map(([attribute, attributeValue]) => {
        return (
          <Attribute
            currentHealth={currentHealth}
            key={attributeValue.title}
            attribute={attribute as IAttribute}
            attributeValue={attributeValue}
            onDecreaseAttributeLevel={onDecreaseAttributeLevel}
            onIncreaseAttributeLevel={onIncreaseAttributeLevel}
          />
        );
      })}
    </div>
  );
};
