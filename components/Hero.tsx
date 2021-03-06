export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Keep noting daily,
            <br className="hidden lg:inline-block" />
            personally and securely
          </h1>
          <p className="mb-4 leading-relaxed">
            Taking notes is extremely personal, private, secret, and
            confidential. Without thinking, people may accidentally write down
            things that they don't want others to see, such as passwords or the
            number of their total assets. Are you sure that no one can see the
            application you are writing in?
          </p>
          <p className="mb-8 leading-relaxed">
            With Memodify, your data is stored locally. Memodify stores your
            data locally and does not have the ability to share it with others.
            There are no plug-ins, nothing. You can write whatever you want.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              <a href="//memodify.app/" target="application">
                Getting Started
              </a>
            </button>
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src="/full-screenshot.png" width="3222px" height="1766px" />
        </div>
      </div>
    </section>
  );
}
