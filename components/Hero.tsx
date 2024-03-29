export default function Hero() {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left sm:mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900 dark:text-gray-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600">
              Memodify
            </span>
          </h1>
          <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900 dark:text-gray-300">
            Keep noting daily, personally and securely
          </h1>
          <p className="mb-4 leading-relaxed dark:text-gray-400">
            Taking notes is extremely personal, private, secret, and
            confidential. Without thinking, people may accidentally write down
            things that they don&apos;t want others to see, such as passwords or
            the number of their total assets. Are you sure that no one can see
            the application you are writing in?
          </p>
          <p className="mb-8 leading-relaxed dark:text-gray-400">
            With Memodify, your data is stored locally. Memodify stores your
            data locally and does not have the ability to share it with others.
            There are no plug-ins, nothing. You can write whatever you want.
          </p>
          <div className="justify-center hidden sm:flex">
            <button className="mr-1 inline-flex text-white bg-yellow-500 hover:bg-yellow-600 hover:drop-shadow-md border-0 py-2 px-6 focus:outline-none rounded text-lg items-center dark:brightness-90">
              <a
                href="//github.com/memodify/memodify.github.io/releases"
                target="release"
              >
                Download
              </a>
            </button>
            <button className="inline-flex text-yellow-500 bg-yellow-100 hover:text-yellow-600 hover:bg-yellow-200 hover:drop-shadow-md border-0 py-2 px-6 focus:outline-none rounded text-lg dark:brightness-90">
              <a href="//memodify.app/" target="application">
                In-browser
              </a>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 sm:w-5/6">
          <img
            className="dark:hidden"
            src="/full-screenshot.png"
            width="3222px"
            height="1766px"
            alt="hero"
            loading="lazy"
          />
          <img
            className="dark:block hidden"
            src="/dark-mode.png"
            width="3222px"
            height="1766px"
            alt="hero-dark"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
