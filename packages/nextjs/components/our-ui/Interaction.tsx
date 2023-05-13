import Typewriter from "./Dialogue";
import DialogueOption from "./DialogueOption";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Interaction = () => {
  return (
    <div className="h-screen w-screen flex justify-center absolute top-0 bg-[url('/assets/windowsxp.jpg')] bg-[length:100%_100%] ">
      <div className="absolute top-0 right-0 p-5">
        <ConnectButton />
      </div>
      <div className="w-3/4 h-full ">
        <div className="h-1/2 w-full bg-amber-500 bg-opacity-70 flex flex-col justify-center items-center  gap-3 md:gap-5 p-5">
          <img
            src="/assets/milady.png"
            alt="milady"
            className="h-3/4 rounded-lg shadow-xl hover:scale-110 duration-300"
          />
          <div className="p-2 md:p-3 border-2 border-black rounded-lg">
            <div>
              <Typewriter fullText="The name is Rekkifart but you can call me fart for short. Your heads lookin mighty empty there, why dont you fill it with some of my hats?" />
              <span className="typewriter-cursor">|</span>
            </div>
          </div>
        </div>
        <div className="h-1/2 w-full bg-rose-500 bg-opacity-70">
          <div className="flex flex-col gap-10 p-5 lg:p-10">
            <DialogueOption option="I want gibme pls" trait="(Degen)" />
            <DialogueOption option="Ur name kinda weird. whats the origin?" trait="(Inquisitive)" />
            <DialogueOption option="Why buy tho? I poor" trait="(Safu)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
