import type { NextPage } from "next";
import Link from "next/link";
import Header from "../components/Header";

const Docs: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row text-gray-700">
        <div className="w-1/5">
          <ul className="flex flex-col">
            <li className="mb-3">
              <Link href="/docs#getting-started">
                <a>Getting Started</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/docs#settings">
                <a>Feature</a>
              </Link>
              <ul className="ml-3">
                <li>
                  <Link href="/docs#feature_command-palette">
                    <a>Command Palette</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <Link href="/docs#settings">
                <a>Settings</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/docs#advanced">
                <a>Advanced</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-4/5">
          <section className="">
            <h1 id="getting-started" className="mb-4 text-4xl font-bold">
              Getting Started
            </h1>
            <p>You can quickly get started with the in-broswer memodify.</p>
            <p>
              Please visit{" "}
              <a
                href="//memodify.app/"
                target="application"
                className="bg-gray-100 p-1 rounded text-base hover:drop-shadow-sm hover:bg-gray-200"
              >
                https://memodify.app
              </a>
              .
            </p>
          </section>
          {/* {Array.from(new Array(0), (e, i) => i).map((e) => (
            <p>{e}</p>
          ))} */}

          <section className="pt-24">
            <h1 id="feature" className="mb-4 text-4xl font-bold">
              Feature
            </h1>
            <h2
              id="feature_command-palette"
              className="pb-4 text-3xl font-bold"
            >
              Command Palette
            </h2>
            <p>TBD</p>
          </section>

          <section className="pt-24">
            <h1 id="settings" className="mb-4 text-4xl font-bold">
              Settings
            </h1>
            <p>TBD</p>
          </section>

          <section className="pt-24">
            <h1 id="advanced" className="mb-4 text-4xl font-bold">
              Advanced
            </h1>
            <p>TBD</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Docs;
