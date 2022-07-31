import type { NextPage } from "next";
import Header from "../components/Header";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { LiveDemo } from "../components/LiveDemo";

const Home: NextPage = () => {
  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <Header />
      <Hero />
      <Feature />
      <LiveDemo />
      <Footer />
    </>
  );
};

export default Home;
