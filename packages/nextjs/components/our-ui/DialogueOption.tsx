interface Props {
  option: string;
  trait: string;
}

const DialogueOption = ({ option, trait }: Props) => {
  return (
    <div className="p-2 w-full  border-2 border-black hover:scale-105 active:scale-95 bg-blue-500 hover:bg-blue-600  duration-300 cursor-pointer flex justify-between shadow-xl">
      <p className=" font-semibold text-white">{option}</p>
      <p className=" font-semibold text-white">{trait}</p>
    </div>
  );
};

export default DialogueOption;
