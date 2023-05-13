import { Dispatch, SetStateAction, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  setIsDead: Dispatch<SetStateAction<boolean>>;
}

const Mirror = ({ setIsDead }: Props) => {
  const [milady, setMilady] = useState(1);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center bg-black text-white pt-10">
      <div className="absolute top-0 right-0 p-3">
        <ConnectButton />
      </div>
      <div className="bg-[url('/assets/city2.png')] bg-[length:100%_100%] flex items-center h-[66.6vh] w-2/3">
        <div className="w-1/6 flex h-full items-center justify-center">
          <ArrowLeftCircleIcon
            color="white"
            onClick={() => setMilady(milady - 1)}
            height="48"
            className="cursor-pointer hover:scale-105 active:scale-95 duration-200"
          />
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <div className="bg-gradient-to-br from-slate-700 to-zinc-200 rounded-full h-[500px] w-[500px] flex justify-center items-center p-10">
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
      <div className="h-1/3 ">
        <div className="w-full flex justify-center">
          <p>3000/10000</p>
        </div>
        <div className="flex gap-16 w-full justify-center">
          <div className="flex flex-col gap-5">
            <p>price: 0.25 eth</p>
            <button className="w-full py-2 bg-rose-500 hover:scale-105 active:scale-95 hover:bg-rose-600 duration-200 shadow-lg">
              Mint all
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <p>price: 0.05 eth</p>
            </div>
            <button className="w-full py-2 bg-blue-500 hover:scale-105 active:scale-95 hover:bg-blue-600 duration-200 shadow-lg">
              Mint
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <p>price: your life</p>
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
