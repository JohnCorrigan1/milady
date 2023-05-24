import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { Howl } from "howler";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import About from "~~/components/our-ui/About";
import MintContainer from "~~/components/our-ui/MintContainer";
import MintMultiple from "~~/components/our-ui/MintMultiple";
import OurHeader from "~~/components/our-ui/OurHeader";
import { query } from "~~/lib/SubgraphFetch";

export interface User {
  id: string;
  miladys: number[];
  pixeladys: number[];
  remillios: number[];
}

const Mint: NextPage = () => {
  const { isConnected } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    if (isConnected) {
      getUser();
    }
  }, [isConnected]);

  const getUser = async () => {
    const result: any = await query("0x4a2c786651229175407d3a2d405d1998bcf40614");
    if (result) setUser(result.data.users[0]);
  };

  const city = useMemo(() => {
    const audio = new Howl({
      src: "/city.wav",
      volume: 5,
    });
    return audio;
  }, []);

  const rave = useMemo(() => {
    const audio = new Howl({
      src: "/rave.wav",
      volume: 5,
    });
    return audio;
  }, []);

  useEffect(() => {
    if (isConnected) {
      city.play();
      city.loop(true);
      rave.play();
      rave.loop(true);
    }
  }, [isConnected]);
  console.log("dmt", "0x4a2C786651229175407d3A2D405d1998bcf40614".toLowerCase());

  return (
    <>
      <Head>
        <title>Rekkifart</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={`min-w-screen min-h-screen w-screen ${isOpen && "fixed"} mint`}>
        <OurHeader />
        <MintContainer user={user} setIsOpen={setIsOpen} />
        <MintMultiple user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
        <button
          onClick={() => setAbout(!about)}
          className="px-2 py-1 lg:px-4 lg:py-2 bg-zinc-800 border-white border-2 rounded-lg text-white text-xl lg:text-2xl font-bold bg-opacity-75 hover:scale-105 hover:bg-opacity-85 active:scale-95 duration-200 absolute top-5 left-5"
        >
          ?
        </button>
        <About about={about} setAbout={setAbout} />
      </div>
    </>
  );
};

export default Mint;
