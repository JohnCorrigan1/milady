import { useEffect, useMemo } from "react";
import Head from "next/head";
import { Howl } from "howler";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import MintContainer from "~~/components/our-ui/MintContainer";
import OurHeader from "~~/components/our-ui/OurHeader";

const Mint: NextPage = () => {
  const { isConnected } = useAccount();

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
      <div className="min-w-screen min-h-screen">
        <OurHeader />
        <MintContainer />
      </div>
    </>
  );
};

export default Mint;
