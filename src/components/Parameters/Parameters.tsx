import { ICharacter } from "../../types/types.ts";
import { getParameters } from "../../utility/utility.ts";
import "./Parameters.scss";

interface ParametersProps {
  character: ICharacter;
}

export const Parameters = (props: ParametersProps) => {
  const { character } = props;

  const { fullHealth, currentHealth, energy, evasion } =
    getParameters(character);

  return (
    <div className="parameters">
      <h2 className="parameters__title">Параметры</h2>
      <p className="parameters__item">
        Жизненная сила: {currentHealth} / {fullHealth}
      </p>
      <p className="parameters__item">Уклонение: {evasion}</p>
      <p className="parameters__item">Энергичность: {energy}</p>
    </div>
  );
};
