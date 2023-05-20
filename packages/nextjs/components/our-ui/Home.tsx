import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  setIsStarted: Dispatch<SetStateAction<boolean>>;
}

const AutoScrollComponent = ({ setIsStarted }: Props) => {
  useEffect(() => {
    const scrollToBottom = () => {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        // Reached the bottom of the page
        return;
      }

      // Calculate the position to scroll to
      const currentPosition = window.pageYOffset;
      const scrollStep = 1; // Adjust scrolling speed here
      const newPosition = currentPosition + scrollStep;

      // Scroll to the new position
      window.scrollTo(0, newPosition);

      // Call the function recursively
      setTimeout(scrollToBottom, 10); // Adjust delay between scroll steps here
    };

    // Start the auto-scrolling when the component mounts
    scrollToBottom();
  }, []);

  return (
    <div
      onClick={() => setIsStarted(true)}
      className="bg-[url('/assets/mint-page-may20.gif')] bg-[length:100%_100%] h-[125vh] md:h-[225vh] lg:h-[300vh] max-w-screen overflow-hidden"
    ></div>
  );
};

export default AutoScrollComponent;
