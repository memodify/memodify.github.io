import Link from "next/link";
import Logo from "../public/favicon256x256.svg";
import { DarkModeToggleButton } from "./elements/DarkModeToggleButton";

export default function Header() {
  return (
    <header
      className="text-gray-600 bg-white/90
        dark:bg-gray-900/90
        sticky top-0
        z-10
        h-16
        backdrop-blur-sm"
    >
      {HeaderLg}
      {HeaderSm}
    </header>
  );
}

const HeaderLg = (
  <div className="hidden sm:flex container mx-auto flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/">
      <span className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Logo width={24} height={24} />
        <p className="ml-2 text-lg font-['Lato'] dark:text-gray-300">
          Memodify
        </p>
      </span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center dark:text-gray-400">
      <Link
        href="/#whats-this"
        className="mr-5 hover:text-gray-900 hover:dark:text-gray-500"
      >
        What&apos;s this
      </Link>
      <Link
        href="/#feature"
        className="mr-5 hover:text-gray-900 hover:dark:text-gray-500"
      >
        Feature
      </Link>
      <Link
        href="/#live-demo"
        className="mr-5 hover:text-gray-900 hover:dark:text-gray-500"
      >
        Live Demo
      </Link>
      <Link
        href="/#pricing"
        className="mr-5 hover:text-gray-900 hover:dark:text-gray-500"
      >
        Pricing
      </Link>
      <Link href="/docs" className="mr-5 hover:dark:text-gray-500">
        Docs
      </Link>
      <Link href="/blog" className="mr-5 hover:dark:text-gray-500">
        Blog
      </Link>
      <a
        className="mr-5 text-gray-500"
        href="https://github.com/memodify"
        target="github/memodify"
      >
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
      <button className="mr-5 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hover:drop-shadow-md dark:brightness-90">
        <a
          className="hover:text-gray-900 whitespace-nowrap"
          href="//memodify.app/"
          target="application"
        >
          In-browser
        </a>
      </button>

      <DarkModeToggleButton />
    </nav>
  </div>
);

const iconBar4 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    />
  </svg>
);

const HeaderSm = (
  <>
    <div className="sm:hidden flex flex-wrap container mx-auto p-5 flex-row justify-between items-center">
      <label htmlFor="left-drawer-toggle-state">{iconBar4}</label>
      <nav className="flex">
        <Link href="/docs" className="mr-5 hover:dark:text-gray-500">
          Docs
        </Link>
        <DarkModeToggleButton />
      </nav>
    </div>
  </>
);
