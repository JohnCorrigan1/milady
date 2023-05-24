import { Dispatch, SetStateAction, useState } from "react";
import MiladyCard from "./MiladyCard";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { User } from "~~/pages/mint";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  user: User;
}

interface Selected {
  ids: number[];
  count: number;
}

const MintMultiple = ({ isOpen, setIsOpen, user }: Props) => {
  const [selected, setSelected] = useState<Selected>({ ids: [], count: 0 });

  const handleClose = () => {
    setIsOpen(false);
    setSelected({ ids: [], count: 0 });
  };

  if (!isOpen) return null;
  return (
    <>
      <div
        onClick={handleClose}
        className="bg-black bg-opacity-80 absolute top-0 right-0 h-full min-h-screen min-w-screen w-full"
      ></div>
      <div
        className={`2xl:w-1/2 w-4/5 lg:w-3/4 lg:h-[65vh] h-[80vh] bg-base-100 fixed lg:top-[17.5vh] top-[10vh]  left-[10vw] lg:left-[12.5vw] 2xl:left-[25vw] rounded-lg overflow-y-scroll overflow-x-none flex flex-col items-center gap-5 p-5 transition-opacity duration-1000 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <XCircleIcon height="48" className="absolute top-0 right-20" />
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold">Select nfts to convert (free)</h1>
          <div className="flex gap-10">
            <p>Wallet Limit: {selected.count}/5</p>
            <p>{(selected.count * 0.05).toFixed(2)}eth</p>
          </div>
          <button className="btn btn-primary px-10">Mint</button>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {user.pixeladys.map((milady, index) => (
            <MiladyCard tokenId={milady} setSelected={setSelected} selected={selected} key={index} />
          ))}
          <MiladyCard tokenId={420} setSelected={setSelected} selected={selected} />
          <MiladyCard tokenId={420} setSelected={setSelected} selected={selected} />
        </div>
      </div>
    </>
  );
};

export default MintMultiple;
