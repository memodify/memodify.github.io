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
            <li>
              <Link href="/docs#getting-started">
                <a>Getting Started</a>
              </Link>
            </li>
            <li>
              <Link href="/docs#settings">
                <a>Settings</a>
              </Link>
            </li>
            <li>
              <Link href="/docs#advanced">
                <a>Advanced</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-4/5">
          <section className="">
            <h1 id="getting-started" className="text-4xl font-bold">
              Getting Started
            </h1>
            <p>TBD</p>
            {/* {Array.from(new Array(50), (e, i) => i).map((e) => (
              <p>{e}</p>
            ))} */}
          </section>
          <section className="pt-24">
            <h1 id="settings" className="text-4xl font-bold">
              Settings
            </h1>
            <p>TBD</p>
          </section>
          <section className="pt-24">
            <h1 id="advanced" className="text-4xl font-bold">
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
