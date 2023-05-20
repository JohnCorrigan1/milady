import { ConnectButton } from "@rainbow-me/rainbowkit";

const OurHeader: React.FC = () => {
  return (
    <header className=" text-accent-focus">
      <div className="flex items-center justify-end p-3 lg:p-5">
        {/* <a className="flex title-font font-bold items-center"> */}
        {/* <span className="text-xl">Our Header?</span> */}
        {/* </a> */}
        <ConnectButton />
      </div>
    </header>
  );
};

export default OurHeader;
