import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>dt money</title>
        <meta property="og:title" content="dt money" />
        <meta
          property="og:description"
          content="Organize now your finance life."
        />
        <meta
          property="og:url"
          content="https://dtmoney-zeta-gold.vercel.app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Organize now your finance life." />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Wevisonn R." />
        <meta property="og:image" content="/images/money.jpg" />
        <meta property="og:type" content="article" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
    </div>
  );
};

export default Home;
