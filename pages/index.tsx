import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dt money</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Dashboard />
    </>
  );
};

export default Home;
