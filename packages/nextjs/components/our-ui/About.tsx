import { XCircleIcon } from "@heroicons/react/24/outline";

interface AboutProps {
  about: boolean;
  setAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

const About = ({ about, setAbout }: AboutProps) => {
  if (!about) return null;
  return (
    <>
      <div
        onClick={() => setAbout(false)}
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50"
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 rounded-lg p-5 lg:p-10  z-50">
        <XCircleIcon
          height="36"
          color="red"
          className="absolute top-1 right-1 hover:scale-[1.02] active:scale-[0.98] cursor-pointer hover:bg-slate-500 hover:bg-opacity-30 rounded-full"
          onClick={() => setAbout(false)}
        />
        <h1 className="text-2xl font-bold mb-5">How does the mint work?</h1>
        <p className="text-lg">Idk bruh just mint broke ass</p>
      </div>
    </>
  );
};

export default About;
