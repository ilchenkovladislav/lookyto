import { useState } from "react";
import { ICharacter } from "../../types/types.ts";
import "./Nickname.scss";

interface NicknameProps {
  character: ICharacter;
  onChangeNickname: (nickname: string) => void;
}

export const Nickname = (props: NicknameProps) => {
  const { character, onChangeNickname } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(character.nickname);

  const onSaveNickname = () => {
    onChangeNickname(input);
    setIsEdit(false);
  };

  const onEditNickname = () => {
    setIsEdit(true);
  };

  const editableNickname = isEdit ? (
    <form onSubmit={onSaveNickname}>
      <input
        className="nickname__input"
        value={input ?? ""}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
    </form>
  ) : (
    character.nickname
  );

  return (
    <div className="nickname">
      <h2 className="nickname__title">Имя героя: {editableNickname}</h2>

      {isEdit ? (
        <button onClick={onSaveNickname}>Сохранить</button>
      ) : (
        <button onClick={onEditNickname}>Изменить имя</button>
      )}
    </div>
  );
};
