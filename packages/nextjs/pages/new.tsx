import { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Interaction from "~~/components/our-ui/Interaction";
import Mirror from "~~/components/our-ui/Mirror";

const New: NextPage = () => {
  const [dialogueDone, setDialogueDone] = useState(false);
  return (
    <>
      <Head>
        <title>Rekkifart</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      {!dialogueDone && <Interaction setDialogueDone={setDialogueDone} />}
      {dialogueDone && <Mirror />}
    </>
  );
};

export default New;
