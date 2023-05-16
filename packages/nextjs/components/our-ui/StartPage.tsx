import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import Link from "next/link";
import { Howl } from "howler";
import { query } from "~~/lib/SubgraphFetch";

interface Props {
  setIsExperience: Dispatch<SetStateAction<boolean>>;
}

const StartPage = ({ setIsExperience }: Props) => {
  useEffect(() => {
    query();
  }, []);

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

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen w-screen bg-black">
      <h1 className="text-6xl text-white">Welcome</h1>
      <div className="flex justify-center gap-10 w-full text-white">
        <button
          onClick={() => setIsExperience(true)}
          onMouseEnter={() => buttonHover.play()}
          onMouseDown={() => mouseClick.play()}
          className=" py-3 w-1/3 max-w-[175px] xl:text-lg font-bold bg-blue-500 hover:scale-105 hover:bg-blue-600 active:scale-95 duration-200"
        >
          Enter
        </button>
        <Link
          target="_blank"
          rel="noreffer"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="w-1/3 max-w-[175px]"
        >
          <button
            onMouseEnter={() => buttonHover.play()}
            onMouseDown={() => mouseClick.play()}
            className=" w-full py-3 xl:text-lg font-bold bg-rose-500 hover:scale-105 hover:bg-rose-600 active:scale-95 duration-200"
          >
            Wut is dis?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
