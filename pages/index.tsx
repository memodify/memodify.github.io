import type { NextPage } from "next";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { LiveDemo } from "../components/LiveDemo";
import Pricing from "../components/Pricing";
import WhatsThis from "../components/WhatsThis";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhatsThis />
      <Feature />
      <LiveDemo />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
