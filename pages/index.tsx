import type { NextPage } from "next";
import Head from "next/head";
import AverageValuation from "../components/average-valuation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Challenge Nutual</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AverageValuation />
      </main>
    </div>
  );
};

export default Home;
