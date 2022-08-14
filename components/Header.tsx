import Link from "next/link";
import Logo from "../public/logo.svg";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo width={24} height={24} />
          <span className="ml-3 text-xl font-['Inter var']">Memodify</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" href="/#whats-this">
            What's this
          </a>
          <a className="mr-5 hover:text-gray-900" href="/#feature">
            Feature
          </a>
          <a className="mr-5 hover:text-gray-900" href="/#live-demo">
            Live Demo
          </a>
          <Link href="/docs">
            <a className="mr-5">Docs</a>
          </Link>
          <a className="mr-5 hover:text-gray-900" href="/#pricing">
            Pricing
          </a>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
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
