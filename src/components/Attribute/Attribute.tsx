import type { AttributeValue } from "../../types/types.ts";
import { IAttribute } from "../../types/types.ts";
import "./Attribute.scss";

interface ParameterProps {
  attributeValue: AttributeValue;
  attribute: IAttribute;
  currentHealth: number;
  onDecreaseAttributeLevel: (attribute: IAttribute) => void;
  onIncreaseAttributeLevel: (attribute: IAttribute) => void;
}

export const Attribute = (props: ParameterProps) => {
  const {
    onDecreaseAttributeLevel,
    onIncreaseAttributeLevel,
    attributeValue,
    attribute,
    currentHealth,
  } = props;

  const { title, value } = attributeValue;

  return (
    <div className="attribute">
      <button
        disabled={
          value === 0 ||
          (attribute === IAttribute.strength && currentHealth <= 1)
        }
        onClick={() => onDecreaseAttributeLevel(attribute)}
      >
        -
      </button>
      <span>
        {title}: {value}
      </span>
      <button onClick={() => onIncreaseAttributeLevel(attribute)}>+</button>
    </div>
  );
};
