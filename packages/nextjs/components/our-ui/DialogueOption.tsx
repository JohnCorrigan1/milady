import { Dispatch, SetStateAction } from "react";

interface Props {
  option: string;
  trait: string;
  color: string;
  hoverColor: string;
  setRekkiDone: Dispatch<SetStateAction<boolean>>;
}

const DialogueOption = ({ option, trait, color, hoverColor, setRekkiDone }: Props) => {
  return (
    <div
      onClick={() => setRekkiDone(false)}
      className={` p-2 w-full border-2 border-black hover:scale-105 active:scale-95 duration-300 cursor-pointer flex justify-between items-center shadow-xl bg-${color} hover:bg-${hoverColor}`}
    >
      <p className=" font-semibold text-white">{option}</p>
      <p className=" font-semibold text-white">{trait}</p>
    </div>
  );
};

export default DialogueOption;
