import { Dispatch, SetStateAction, useState } from "react";
import Typewriter from "./Dialogue";
import { DialogueOption } from "./DialogueOption";
import { DIALOGUE } from "~~/lib/data";

interface Props {
  setDialogueDone: Dispatch<SetStateAction<boolean>>;
}

const Interaction = ({ setDialogueDone }: Props) => {
  const [index, setIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [rekkiDone, setRekkiDone] = useState(true);
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(DIALOGUE[index]?.prompt || "");

  return (
    <div className="h-screen w-screen flex justify-center absolute top-0 bg-black bg-[length:100%_100%] ">
      <div className="w-3/4 h-full pt-10 ">
        <div className="h-2/3 w-full bg-amber-500 bg-[url('/assets/city2.png')] bg-[length:100%_100%] bg-opacity-90 flex flex-col justify-center items-center  gap-3 md:gap-5 p-5 shadow-xl">
          <img
            onClick={() => setDialogueDone(true)}
            src="/assets/milady.png"
            alt="milady"
            className="h-3/4 rounded-lg shadow-xl hover:scale-110 duration-300"
          />
          <div className="p-2 md:p-3 border-2 border-black rounded-lg w-2/3 bg-zinc-800 bg-opacity-90">
            <div>
              <Typewriter setShowButtons={setShowButtons} fullText={fullText} text={text} setText={setText} />
              <span className="typewriter-cursor">|</span>
            </div>
          </div>
        </div>
        <div className="h-1/3 w-full">
          {index < DIALOGUE.length ? (
            <div
              className={`grid grid-cols-2 gap-5 h-full w-full grid-rows-2 py-5 transition-opacity duration-1000 ${
                showButtons && rekkiDone ? "opacity-100" : "opacity-0"
              } 
            `}
            >
              <DialogueOption
                index={index}
                setIndex={setIndex}
                trait="(Degen)"
                setShowButtons={setShowButtons}
                setFullText={setFullText}
                setRekkiDone={setRekkiDone}
                showButtons={showButtons}
              />
              <DialogueOption
                index={index}
                setIndex={setIndex}
                trait="(Safu)"
                setShowButtons={setShowButtons}
                setFullText={setFullText}
                setRekkiDone={setRekkiDone}
                showButtons={showButtons}
              />
              <DialogueOption
                index={index}
                setIndex={setIndex}
                trait="(Dumb)"
                setShowButtons={setShowButtons}
                setFullText={setFullText}
                setRekkiDone={setRekkiDone}
                showButtons={showButtons}
              />
              <DialogueOption
                index={index}
                setIndex={setIndex}
                trait="(Horny)"
                setShowButtons={setShowButtons}
                setFullText={setFullText}
                setRekkiDone={setRekkiDone}
                showButtons={showButtons}
              />
            </div>
          ) : (
            <div
              className={`flex gap-5 w-full h-full py-5 justify-center transition-opacity duration-1000 ${
                showButtons && rekkiDone ? "opacity-100" : "opacity-0"
              } 
            `}
            >
              <button className="px-5 py-2 bg-rose-500">pop</button>
              <button className="px-5 py-2 bg-rose-500">wap</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interaction;
