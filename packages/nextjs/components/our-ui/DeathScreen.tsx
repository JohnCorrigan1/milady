const DeathScreen: React.FC = () => {
  return (
    <div className="bg-black top-0 h-screen w-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-red-700 text-6xl animate-bounce duration-200">You died</h1>
      <button className="py-2 px-5 bg-red-600 font-bold text-lg hover:scale-105 hover:bg-red-700 active:scale-95 duration-200">
        Try again
      </button>
    </div>
  );
};

export default DeathScreen;
