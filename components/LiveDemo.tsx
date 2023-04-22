export function LiveDemo() {
  const livedemoURL =
    process.env.NEXT_PUBLIC_LIVEDEMO_URL ??
    "http://localhost:3000/demo/editor-preview";
  return (
    <section id="live-demo" className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 mb-2 dark:text-gray-300">
            Live Demo
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 dark:text-gray-400">
            You can try power of MDX.
          </p>
          <p className="mt-4 sm:hidden block">
            <button className="inline-flex text-yellow-500 bg-yellow-100 hover:text-yellow-600 hover:bg-yellow-200 hover:drop-shadow-md border-0 py-2 px-6 focus:outline-none rounded text-lg dark:brightness-90">
              <a
                href="//memodify.app/demo/editor-preview"
                target="demo/editor-preview"
              >
                open a demo page
              </a>
            </button>
          </p>
        </div>
        <div className="flex-wrap -m-4 hidden sm:flex">
          <iframe
            src={livedemoURL}
            className="border-none m-0 p-0 w-full h-[496px]" // height={`${240 * 2 + 8 * 2}px`} // 240 is the height of /demp/editor-preview. 8 is body's margin of iframe.
            loading="lazy"
          />
        </div>
        <p className="text-gray-400 text-left text-sm hidden sm:block">
          If you cannot see the demo, please accept 3rd party cookie on your
          browser settings.
        </p>
      </div>
    </section>
  );
}
