import { Dispatch, SetStateAction, useMemo } from "react";
import { Howl } from "howler";
import { audioTime } from "~~/lib/audio";
import { DIALOGUE } from "~~/lib/data";

interface Props {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  trait: string;
  setShowButtons: Dispatch<SetStateAction<boolean>>;
  setFullText: Dispatch<SetStateAction<string>>;
  setRekkiDone: Dispatch<SetStateAction<boolean>>;
  showButtons: boolean;
}

export const DialogueOption = ({
  trait,
  setShowButtons,
  setFullText,
  index,
  setIndex,
  setRekkiDone,
  showButtons,
}: Props) => {
  const traitToIndex = (trait: string) => {
    switch (trait) {
      case "(Degen)":
        return 0;
      case "(Safu)":
        return 1;
      case "(Dumb)":
        return 2;
      case "(Horny)":
        return 3;
      default:
        return 5;
    }
  };

  const buttonHover = useMemo(() => {
    const audio = new Howl({
      src: "/button.wav",
    });
    audio.volume(100);
    return audio;
  }, []);
  const mouseClick = useMemo(() => {
    const audio = new Howl({
      src: "/mouseClick.wav",
    });
    audio.volume(5);
    return audio;
  }, []);

  const handleClick = async () => {
    setShowButtons(false);
    await new Promise(r => setTimeout(r, 200));
    const newText = DIALOGUE[index].responses[traitToIndex(trait)].npcResponse;
    setFullText(newText);
    setRekkiDone(false);
    await new Promise(r => setTimeout(r, audioTime(newText) + 1000));
    const newIndex = index + 1;
    setIndex(newIndex);
    setShowButtons(false);
    const nextPrompt = DIALOGUE[newIndex]?.prompt;
    if (nextPrompt) {
      setFullText(nextPrompt);
    } else {
      setFullText("What do you say? Do you want to pop or wap?");
    }
    setRekkiDone(true);
  };

  return (
    <>
      {showButtons && (
        <div
          onClick={handleClick}
          onMouseEnter={() => buttonHover.play()}
          onMouseDown={() => mouseClick.play()}
          className={` p-1 w-full border-2 border-black hover:scale-105 active:scale-95 duration-300 cursor-pointer flex justify-between items-center shadow-xl bg-rose-500 hover:bg-rose-600`}
        >
          <p className=" font-semibold text-white ">{DIALOGUE[index].responses[traitToIndex(trait)].userResponse}</p>
          {/* <p className=" font-semibold text-white">{trait}</p> */}
        </div>
      )}
    </>
  );
};
