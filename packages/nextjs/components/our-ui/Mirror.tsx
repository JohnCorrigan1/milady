import { Dispatch, SetStateAction, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  setIsDead: Dispatch<SetStateAction<boolean>>;
}

const Mirror = ({ setIsDead }: Props) => {
  const [milady, setMilady] = useState(1);

  return (
    <div className=" h-screen min-h-screen min-w-screen flex flex-col items-center bg-black text-white ">
      <div className="bg-[url('/assets/city2.png')] bg-[length:100%_100%] flex items-center h-2/3 w-full 2xl:w-2/3 relative">
        <div className="absolute top-0 left-0 p-3">
          <ConnectButton />
        </div>
        <button className="px-2 py-1 lg:px-4 lg:py-2 bg-zinc-800 border-white border-2 rounded-lg text-white text-xl lg:text-2xl font-bold bg-opacity-75 hover:scale-105 hover:bg-opacity-85 active:scale-95 duration-200 absolute top-5 right-5">
          ?
        </button>
        <div className="w-1/6 flex h-full items-center justify-center">
          <ArrowLeftCircleIcon
            color="white"
            onClick={() => setMilady(milady - 1)}
            height="48"
            className="cursor-pointer hover:scale-105 active:scale-95 duration-200"
          />
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <div className="bg-gradient-to-br from-slate-700 to-zinc-200 rounded-full  lg:h-[500px] lg:w-[500px] flex justify-center items-center p-10">
            <img src={`https://www.miladymaker.net/milady/${milady}.png`} className="w-1/2" />
          </div>
        </div>
        <div className="w-1/6 flex h-full items-center justify-center">
          <ArrowRightCircleIcon
            color="white"
            onClick={() => setMilady(milady + 1)}
            height="48"
            className="cursor-pointer hover:scale-105 active:scale-95 duration-200"
          />
        </div>
      </div>
      <div className="h-1/3 lg:h-1/3 w-full text-sm lg:text-lg p-5 ">
        <div className="w-full flex justify-center">
          <p>3000/10000</p>
        </div>
        <div className="flex lg:gap-16 w-full justify-between lg:justify-center ">
          <div className="flex flex-col lg:gap-5 w-1/4 lg:w-1/5 xl:w-1/6 items-center">
            <p>0.25 E</p>
            <button className="w-full py-2 bg-rose-500 hover:scale-105 active:scale-95 hover:bg-rose-600 duration-200 shadow-lg">
              Mint all
            </button>
          </div>
          <div className="flex flex-col items-center lg:gap-5 w-1/4 lg:w-1/5 xl:w-1/6">
            <div>
              <p>0.05 E</p>
            </div>
            <button className="w-full py-2 bg-blue-500 hover:scale-105 active:scale-95 hover:bg-blue-600 duration-200 shadow-lg">
              Mint
            </button>
          </div>
          <div className="flex flex-col items-center lg:gap-5 w-1/4 lg:w-1/5 xl:w-1/6">
            <p>Life</p>
            <button
              onClick={() => setIsDead(true)}
              className="w-full py-2 bg-yellow-500 hover:scale-105 active:scale-95 hover:bg-yellow-600 duration-200 shadow-lg"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mirror;
