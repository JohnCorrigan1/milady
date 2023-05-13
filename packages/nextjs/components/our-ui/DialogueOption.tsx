interface Props {
  option: string;
  trait: string;
}

const DialogueOption = ({ option, trait }: Props) => {
  return (
    <div className="p-3 w-full md:w-3/4 lg:w-2/3 lg:p-5 xl:w-1/2 2xl:w-1/3 border-2 border-black rounded-lg hover:scale-105 active:scale-95 bg-blue-500 hover:bg-blue-600  duration-300 cursor-pointer flex justify-between">
      <p className="text-lg font-semibold text-white">{option}</p>
      <p className="text-lg font-semibold text-white">{trait}</p>
    </div>
  );
};

export default DialogueOption;
