import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Saket Khare</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
      </Head>

      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
