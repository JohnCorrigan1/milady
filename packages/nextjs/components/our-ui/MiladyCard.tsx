import { Dispatch, SetStateAction, useState } from "react";

interface Selected {
  ids: number[];
  count: number;
}

interface Props {
  setSelected: Dispatch<SetStateAction<Selected>>;
  selected: Selected;
  tokenId: number;
}

const MiladyCard = ({ tokenId, setSelected, selected }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (selected.count === 5 && !isSelected) return alert("You can only mint 5 Piladys");
    setIsSelected(!isSelected);
    setSelected((prev: Selected) => {
      if (isSelected) {
        return { ids: prev.ids.filter(id => id !== 420), count: prev.count - 1 };
      } else {
        return { ids: [...prev.ids, 420], count: prev.count + 1 };
      }
    });
  };

  return (
    <div className="flex flex-col gap-3 bg-base-300 p-5 rounded-lg items-center shadow-lg">
      <h1 className="text-xl font-bold">#{tokenId}</h1>
      <img src="/assets/milady.png" className="rounded-lg" />
      <button
        onClick={handleClick}
        className={`btn btn-primary w-full ${isSelected ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
      >
        {isSelected ? "Nah" : "Select"}
      </button>
    </div>
  );
};

export default MiladyCard;
