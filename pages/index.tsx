import type { NextPage } from "next";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { LiveDemo } from "../components/LiveDemo";
import Pricing from "../components/Pricing";
import WhatsThis from "../components/WhatsThis";
import Link from "next/link";
import { LeftDrawer, closeLeftDrawer } from "../components/elements/LeftDrawer";

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
      <LeftDrawer>
        <HeadingLines />
      </LeftDrawer>
    </>
  );
};

export default Home;

const HeadingLines = () => (
  <ul className="p-4">
    {(
      [
        ["/", "Home"],
        ["/#whats-this", "What's this"],
        ["/#feature", "Feature"],
        ["/#live-demo", "Live Demo"],
        ["/#pricing", "Pricing"],
        ["/docs", "Docs"],
        ["/blog/", "Blog"],
      ] as const
    ).map(([href, label]) => {
      return (
        <li className="pb-4" key={label}>
          <Link href={href} onClick={closeLeftDrawer}>
            {label}
          </Link>
        </li>
      );
    })}
  </ul>
);
