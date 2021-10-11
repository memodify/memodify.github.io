import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const url =
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2970&q=80";
  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <div
        className="bg-cover bg-no-repeat bg-center bg-opacity-20"
        style={{
          backgroundImage: `url(${url})`,
          // backgroundSize: `cover`,
          backgroundColor: "#aaa",
          backgroundBlendMode: "hard-light",
        }}
      >
        <div style={{ height: "400px" }} />
      </div>
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div> */}
      <h1 className="pt-3 font-bold text-red-400">Memodify</h1>
      <div>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <main>
          <a href="//app.memodify.com">Getting Started</a>
        </main>
      </div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <svg
            className="h-12 w-12"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                <stop stopColor="#2397B3" offset="0%"></stop>
                <stop stopColor="#13577E" offset="100%"></stop>
              </linearGradient>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                <stop stopColor="#73DFF2" offset="0%"></stop>
                <stop stopColor="#47B1EB" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path
                d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
                fill="url(#a)"
                transform="translate(1 1)"
              ></path>
              <path
                d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
                fill="url(#b)"
                transform="translate(1 1)"
              ></path>
              <path
                d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                fill="#FFF"
              ></path>
            </g>
          </svg>{" "}
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
