import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    console.log("g");
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center  justify-center gap-4 bg-gray-700">
        <h1 className="text-4xl font-bold">Weekly Newsletter</h1>
        <p>Enter your email below to receive updates and various news.</p>
        <form onSubmit={handleSubscribe} className=" flex flex-col gap-4">
          <label htmlFor="email">Email</label>
          <input
            className="input-bordered input-info input w-full max-w-xs "
            id="email"
          ></input>
          <button className="btn-primary btn ">Subscribe</button>
        </form>
      </main>
    </>
  );
};

export default Home;
