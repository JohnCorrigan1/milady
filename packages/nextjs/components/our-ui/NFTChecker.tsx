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
      <div className="absolute top-1/4 bg-pink-500 w-1/2 h-1/2 flex text-black justify-between items-center p-10">
        <div className="flex flex-col w-1/3 gap-5">
          <div className="w-full flex flex-col">
            <label>Collection</label>
            <select name="collection" className="flex p-1">
              <option value="Milady">Milady</option>
              <option value="Remillio">Remillio</option>
              <option value="Pixelady">Pixelady</option>
            </select>
          </div>
          <input type="number" placeholder="Token Id" className="p-1 border-b-2 border-white text-center" />
          <button className="bg-emerald-700 px-3 py-2 hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg">
            Check
          </button>
        </div>
        <div className="w-1/3">
          {/* <img src="https://www.miladymaker.net/milady/420.png" /> */}
          <img src="/assets/milady.png" />
        </div>
      </div>
    </>
  );
};

export default NFTChecker;
