import { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Connect from "~~/components/our-ui/Connect";
import DeathScreen from "~~/components/our-ui/DeathScreen";
import Interaction from "~~/components/our-ui/Interaction";
import Mirror from "~~/components/our-ui/Mirror";

const New: NextPage = () => {
  const [dialogueDone, setDialogueDone] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const { isConnected } = useAccount();

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
      {isConnected && !dialogueDone && !isDead && <Interaction setDialogueDone={setDialogueDone} />}
      {dialogueDone && !isDead && <Mirror setIsDead={setIsDead} />}
      {isDead && <DeathScreen />}
    </>
  );
};

export default New;
