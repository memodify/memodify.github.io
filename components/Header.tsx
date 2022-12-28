import Link from "next/link";
import Logo from "../public/favicon256x256.svg";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo width={24} height={24} />
            <p className="ml-2 text-lg font-['Lato']">Memodify</p>
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/#whats-this" className="mr-5 hover:text-gray-900">What's this</Link>
          <Link href="/#feature" className="mr-5 hover:text-gray-900">Feature</Link>
          <Link href="/#live-demo" className="mr-5 hover:text-gray-900">Live Demo</Link>
          <Link href="/docs" className="mr-5">Docs</Link>
          <Link href="/blog" className="mr-5">Blog</Link>
          <Link href="/#pricing" className="mr-5 hover:text-gray-900">Pricing</Link>
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
