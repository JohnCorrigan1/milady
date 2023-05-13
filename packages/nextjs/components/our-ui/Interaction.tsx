import { Dispatch, SetStateAction } from "react";
import Typewriter from "./Dialogue";
import DialogueOption from "./DialogueOption";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface Props {
  setDialogueDone: Dispatch<SetStateAction<boolean>>;
}

const Interaction = ({ setDialogueDone }: Props) => {
  return (
    <div className="h-screen w-screen flex justify-center absolute top-0 bg-black bg-[length:100%_100%] ">
      <div className="absolute top-0 right-0 p-5">
        <ConnectButton />
      </div>
      <div className="w-3/4 h-full py-10 ">
        <div className="h-2/3 w-full bg-amber-500 bg-[url('/assets/windowsxp.jpg')] bg-[length:100%_100%] bg-opacity-90 flex flex-col justify-center items-center  gap-3 md:gap-5 p-5 shadow-xl">
          <img
            src="/assets/milady.png"
            alt="milady"
            className="h-3/4 rounded-lg shadow-xl hover:scale-110 duration-300"
          />
          <div className="p-2 md:p-3 border-2 border-black rounded-lg w-2/3">
            <div>
              <Typewriter fullText="The name is Rekkifart but you can call me fart for short. Your heads lookin mighty empty there, why dont you fill it with some of my hats?" />
              <span className="typewriter-cursor">|</span>
            </div>
          </div>
        </div>
        <div className="h-1/3 w-full">
          <div className="flex justify-between gap-5 h-full w-full items-center ">
            <div onClick={() => setDialogueDone(true)} className="w-1/2 flex flex-col gap-5">
              <DialogueOption option="I want gibme pls" trait="(Degen)" />
              <DialogueOption option="Ur name kinda weird. whats the origin?" trait="(Inquisitive)" />
            </div>
            <div className="w-1/2 flex flex-col gap-5">
              <DialogueOption option="Why buy tho? I poor" trait="(Safu)" />
              <DialogueOption option="Why buy tho? I poor" trait="(Safu)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
