import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NFTChecker = ({ isOpen, setIsOpen }: Props) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className=" absolute top-0 right-0 h-screen w-screen bg-black bg-opacity-50"
      ></div>
      <div className="absolute top-1/4 bg-pink-500 w-1/2 h-1/2 flex justify-center items-center text-black">
        <select className="">
          <option value="Milady">Milady</option>
          <option value="Remillio">Remillio</option>
          <option value="Pixelady">Pixelady</option>
        </select>
        <input type="number" placeholder="Token Id" className="w-1/4 h-full p-1 border-b-2 border-white text-center" />
      </div>
    </>
  );
};

export default NFTChecker;
