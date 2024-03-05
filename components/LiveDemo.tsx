export function LiveDemo() {
  const livedemoURL =
    process.env.NEXT_PUBLIC_LIVEDEMO_URL ??
    "//localhost:5173/demo-editor-preview";
  return (
    <section id="live-demo" className="text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-8 flex w-full flex-col text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-300 sm:text-3xl">
            Live Demo
          </h1>
          <p className="mx-auto text-base leading-relaxed text-gray-500 dark:text-gray-400 lg:w-2/3">
            You can try power of MDX.
          </p>
          <p className="mt-4 block sm:hidden">
            <button className="inline-flex rounded border-0 bg-yellow-100 px-6 py-2 text-lg text-yellow-500 hover:bg-yellow-200 hover:text-yellow-600 hover:drop-shadow-md focus:outline-none dark:brightness-90">
              <a
                href="//memodify.app/demo/editor-preview"
                target="demo/editor-preview"
              >
                open a demo page
              </a>
            </button>
          </p>
        </div>
        <div className="-m-4 hidden flex-wrap pb-6 sm:flex">
          <iframe
            src={livedemoURL}
            className="m-0 h-[496px] w-full border-none p-0" // height={`${240 * 2 + 8 * 2}px`} // 240 is the height of /demp/editor-preview. 8 is body's margin of iframe.
            loading="lazy"
          />
        </div>
        <p className="hidden text-left text-sm text-gray-400 sm:block">
          If you cannot see the demo, please accept 3rd party cookie on your
          browser settings.
        </p>
      </div>
    </section>
  );
}
