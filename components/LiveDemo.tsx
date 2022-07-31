export function LiveDemo() {
  const livedemoURL =
    process.env.NEXT_PUBLIC_LIVEDEMO_URL ??
    "http://localhost:3000/demo/editor-preview";
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1
            className={[
              "sm:text-3xl",
              "text-2xl",
              "font-bold",
              "title-font",
              "text-center",
              "text-gray-900",
              "mb-2",
            ].join(" ")}
          >
            Live demo
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            There is no plans except for free.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <iframe
            src={livedemoURL}
            width="100%"
            height={`${240 + 8 * 2}px`} // 240 is the height of /demp/editor-preview. 8 is body's margin of iframe.
            style={{ border: "none", margin: 0, padding: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
