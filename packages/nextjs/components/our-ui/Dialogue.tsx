import { Dispatch, SetStateAction, useEffect } from "react";
import { isPuncutation } from "~~/lib/audio";

interface Props {
  fullText: string;
  setShowButtons: Dispatch<SetStateAction<boolean>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const Typewriter = ({ fullText, setShowButtons, text, setText }: Props) => {
  // const [text, setText] = useState("");
  // const realText = fullText.slice(0, 2).concat(fullText.slice(1));

  // let currentIndex = 0;
  // useEffect(() => {
  //   setText("");
  //   const interval = setInterval(() => {
  //     if (currentIndex === realText.length - 1) {
  //       clearInterval(interval);

  //       setShowButtons(true);
  //     } else {
  //       setText(prevText => prevText.concat(realText[currentIndex]));
  //       currentIndex++;
  //     }
  //   }, 25); // Adjust the typing speed (milliseconds per character) to your preference

  //   return () => clearInterval(interval);
  // }, [fullText]);

  useEffect(() => {
    setText("");
    async function revealText() {
      console.log(fullText);
      for (const char of fullText) {
        if (isPuncutation(char)) {
          setText(prevText => prevText.concat(char));
          await new Promise(resolve => setTimeout(resolve, 700));
        } else {
          setText(prevText => prevText.concat(char));
          await new Promise(resolve => setTimeout(resolve, 25));
        }
      }
      setShowButtons(true);
    }
    revealText();
  }, [fullText]);

  return <span className="text-white font-semibold">{text}</span>;
};

export default Typewriter;
