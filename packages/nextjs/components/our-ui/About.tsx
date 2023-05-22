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
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 rounded-lg p-5 z-50">
        <h1 className="text-2xl font-bold mb-5">How does the mint work?</h1>
        <p className="text-lg"></p>
      </div>
    </>
  );
};

export default About;
