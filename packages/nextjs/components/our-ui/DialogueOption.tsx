import { Dispatch, SetStateAction } from "react";
import { DIALOGUE } from "~~/lib/data";

interface Props {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  trait: string;
  setShowButtons: Dispatch<SetStateAction<boolean>>;
  setFullText: Dispatch<SetStateAction<string>>;
  setRekkiDone: Dispatch<SetStateAction<boolean>>;
}

export const DialogueOption = ({ trait, setShowButtons, setFullText, index, setIndex, setRekkiDone }: Props) => {
  const traitToIndex = (trait: string) => {
    switch (trait) {
      case "(Degen)":
        return 0;
      case "(Inquisitive)":
        return 1;
      case "(Safu)":
        return 2;
      case "(Horny)":
        return 3;
      default:
        return 5;
    }
  };

  const handleClick = async () => {
    // setShowButtons(false);
    setFullText(DIALOGUE[index].responses[traitToIndex(trait)].npcResponse);
    setRekkiDone(false);
    await new Promise(r => setTimeout(r, 6000));
    setIndex(index + 1);
    setShowButtons(false);
    setFullText(DIALOGUE[index].prompt);
    setRekkiDone(true);
  };

  return (
    <div
      onClick={handleClick}
      className={` p-2 w-full border-2 border-black hover:scale-105 active:scale-95 duration-300 cursor-pointer flex justify-between items-center shadow-xl bg-rose-500 hover:bg-rose-600`}
    >
      <p className=" font-semibold text-white">{DIALOGUE[index].responses[traitToIndex(trait)].userResponse}</p>
      <p className=" font-semibold text-white">{trait}</p>
    </div>
  );
};
