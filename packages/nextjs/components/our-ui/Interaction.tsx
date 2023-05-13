import { Dispatch, SetStateAction } from "react";
import Typewriter from "./Dialogue";
import DialogueOption from "./DialogueOption";

interface Props {
  setDialogueDone: Dispatch<SetStateAction<boolean>>;
}

const Interaction = ({ setDialogueDone }: Props) => {
  // const [rekkiDone, setRekkiDone] = useState(false);

  // useEffect(() => {
  // if (rekkiDone) {
  // }
  // }, [rekkiDone]);

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
              <Typewriter fullText="The name is Rekkifart but you can call me fart for short. Your heads lookin mighty empty there, why dont you fill it with some of my hats?" />
              <span className="typewriter-cursor">|</span>
            </div>
          </div>
        </div>
        <div className="h-1/3 w-full">
          <div className={`grid grid-cols-2 gap-5 h-full w-full grid-rows-2 py-5`}>
            <DialogueOption color="rose-500" hoverColor="rose-600" option="I want gibme pls" trait="(Degen)" />
            <DialogueOption
              color="yellow-500"
              hoverColor="yellow-600"
              option="Ur name kinda weird. whats the origin?"
              trait="(Inquisitive)"
            />
            <DialogueOption color="blue-500" hoverColor="blue-600" option="Why buy tho? I poor" trait="(Safu)" />
            <DialogueOption color="slate-500" hoverColor="yellow-600" option="????" trait="(Horny)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
