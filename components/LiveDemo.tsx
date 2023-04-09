export function LiveDemo() {
  const livedemoURL =
    process.env.NEXT_PUBLIC_LIVEDEMO_URL ??
    "http://localhost:3000/demo/editor-preview";
  return (
    <section id="live-demo" className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 mb-2">
            Live Demo
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            You can try power of MDX.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <iframe
            src={livedemoURL}
            width="100%"
            height={`${240 * 2 + 8 * 2}px`} // 240 is the height of /demp/editor-preview. 8 is body's margin of iframe.
            style={{ border: "none", margin: 0, padding: 0 }}
          />
        </div>
        <p className="text-gray-400 text-left text-sm">
          If you cannot see the demo, please accept 3rd party cookie on your
          browser settings.
        </p>
      </div>
    </section>
  );
}
