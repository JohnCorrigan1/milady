import { Dispatch, SetStateAction } from "react";
import { MiWenchMint, MiladyMint } from "./MiladyMint";
import { User } from "~~/pages/mint";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  user: User;
}

const MintContainer = ({ setIsOpen, user }: Props) => {
  console.log(user);
  return (
    <div className="w-full h-full flex justify-center items-center p-5 ">
      <div className=" bg-base-300 w-full xl:w-2/3 rounded-lg flex flex-col p-5 xl:p-10 justify-between gap-10 shadow-xl ">
        <MiladyMint setIsOpen={setIsOpen} />
        <MiWenchMint />
      </div>
    </div>
  );
};

export default MintContainer;
