interface Props {
  option: string;
  trait: string;
  color: string;
  hoverColor: string;
}

const DialogueOption = ({ option, trait, color, hoverColor }: Props) => {
  return (
    <div
      className={` p-2 w-full border-2 border-black hover:scale-105 active:scale-95 duration-300 cursor-pointer flex justify-between items-center shadow-xl bg-${color} hover:bg-${hoverColor}`}
    >
      <p className=" font-semibold text-white">{option}</p>
      <p className=" font-semibold text-white">{trait}</p>
    </div>
  );
};

export default DialogueOption;
