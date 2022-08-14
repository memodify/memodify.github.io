import type { NextPage } from "next";
import Header from "../components/Header";

const Docs: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-700">
        <div className="w-1/5">
          <ul>
            <li>
              <a href="/docs#getting-started">Getting Started</a>
            </li>
            <li>
              <a href="/docs#config">Config</a>
            </li>
            <li>
              <a href="/docs#advanced">Advanced</a>
            </li>
          </ul>
        </div>
        <div className="w-4/5">
          <section className="">
            <h1 id="getting-started" className="text-4xl font-bold">
              Getting Started
            </h1>
            <p>TBD</p>
          </section>
          <section className="pt-24">
            <h1 id="config" className="text-4xl font-bold">
              Config
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
