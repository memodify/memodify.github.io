import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FeatureList from "../contents/feature-list.mdx";
import RemarkableFeatures from "../contents/remarkable-features.mdx";
import GettingStarted from "../contents/getting-started.mdx";
import Settings from "../contents/settings.mdx";
import Advanced from "../contents/advanced.mdx";
import dynamic from "next/dynamic";

const Docs: NextPage<Props> = (props) => {
  return (
    <>
      <Header />
      <Main {...props} />
      <Footer />
    </>
  );
};

const Main: NextPage<Props> = (props) => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row text-gray-700">
        <div className="w-1/5">
          <ul className="flex flex-col" style={{ position: "sticky", top: 0 }}>
            <li className="mb-3">
              <Link href="/docs#getting-started">Getting Started</Link>
            </li>
            <li className="mb-3">
              <Link href="/docs#settings">Feature</Link>
              <ul className="ml-3">
                <li>
                  <Link href="/docs#remarkable-features_command-palette">
                    Command Palette
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <Link href="/docs#settings">Settings</Link>
            </li>
            <li className="mb-3">
              <Link href="/docs#advanced">Advanced</Link>
            </li>
            <li className="mb-3">
              <Link href="/docs#feature-list">Feature List</Link>
            </li>
          </ul>
          <div className="text-xs">
            built at {props.meta.builtAt.toISOString()}
          </div>
        </div>
        <div className="w-4/5">
          {(
            [
              [<GettingStarted />],
              [<RemarkableFeatures />],
              [<Settings />],
              [<Advanced />],
              [<FeatureList />],
            ] as const
          ).map(([e], idx) => (
            <section
              className={[idx > 0 ? "pt-24" : null, "prose"].join(" ")}
              key={`section${idx}`}
            >
              {e}
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Docs;

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
