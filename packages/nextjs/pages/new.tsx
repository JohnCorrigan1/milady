import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { Howl } from "howler";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Connect from "~~/components/our-ui/Connect";
import DeathScreen from "~~/components/our-ui/DeathScreen";
import AutoScrollComponent from "~~/components/our-ui/Home";
import Interaction from "~~/components/our-ui/Interaction";
import Mirror from "~~/components/our-ui/Mirror";

const New: NextPage = () => {
  const [dialogueDone, setDialogueDone] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
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
      {!isConnected && <Connect />}
      {isConnected && !dialogueDone && !isDead && !isStarted && <AutoScrollComponent setIsStarted={setIsStarted} />}
      {isConnected && !dialogueDone && !isDead && isStarted && (
        <Interaction setDialogueDone={setDialogueDone} setIsDead={setIsDead} />
      )}
      {isConnected && dialogueDone && !isDead && <Mirror setIsDead={setIsDead} />}
      {isDead && isConnected && <DeathScreen setDialogueDone={setDialogueDone} setIsDead={setIsDead} />}
    </>
  );
};

export default New;
