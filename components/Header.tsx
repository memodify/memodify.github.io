import Link from "next/link";
import Logo from "../public/logo.svg";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo width={24} height={24} />
            <p className="ml-2 text-lg font-['Lato']">Memodify</p>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/#whats-this">
            <a className="mr-5 hover:text-gray-900">What's this</a>
          </Link>
          <Link href="/#feature">
            <a className="mr-5 hover:text-gray-900">Feature</a>
          </Link>
          <Link href="/#live-demo">
            <a className="mr-5 hover:text-gray-900">Live Demo</a>
          </Link>
          <Link href="/docs">
            <a className="mr-5">Docs</a>
          </Link>
          <Link href="/#pricing">
            <a className="mr-5 hover:text-gray-900">Pricing</a>
          </Link>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hover:drop-shadow-md">
            <a
              className="hover:text-gray-900 whitespace-nowrap"
              href="//memodify.app/"
              target="application"
            >
              In-browser
            </a>
          </button>
        </nav>
      </div>
    </header>
  );
}
