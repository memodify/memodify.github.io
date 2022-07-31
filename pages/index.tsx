import type { NextPage } from "next";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { LiveDemo } from "../components/LiveDemo";
import Pricing from "../components/Pricing";

const Home: NextPage = () => {
  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <Header />
      <Hero />
      <Feature />
      <LiveDemo />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
