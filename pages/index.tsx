import type { GetStaticProps, NextPage } from "next";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { LiveDemo } from "../components/LiveDemo";
import Pricing from "../components/Pricing";
import WhatsThis from "../components/WhatsThis";
import Link from "next/link";
import { LeftDrawer, closeLeftDrawer } from "../components/elements/LeftDrawer";

const Home: NextPage<Props> = (props) => (
  <div id="landing-page" data-generated-date={props.meta.builtAt.toISOString()}>
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
  </div>
);

export default Home;

const HeadingLines = () => (
  <ul
    className="
      px-12
      [&>li:not(:nth-of-type(1))]:pt-4
      [&_*]:dark:text-gray-400
      "
  >
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
        <li key={label}>
          <Link href={href} onClick={closeLeftDrawer}>
            {label}
          </Link>
        </li>
      );
    })}
  </ul>
);

type Props = {
  meta: {
    builtAt: Date;
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      meta: {
        builtAt: new Date(),
      },
    },
  };
};
