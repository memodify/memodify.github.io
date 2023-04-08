export default function Feature() {
  return (
    <section id="whats-this" className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-4xl text-4xl font-bold text-center text-gray-900">
            What's this?
          </h1>
        </div>
        <div className="flex flex-col text-center">
          <p>Memodify is a Markdown editor.</p>
          <ul className="mt-4">
            <li className="mt-4">
              Powerful preview with{" "}
              <a className="underline decoration-sky-500">MDX</a>
            </li>
            <li className="mt-4">
              <a className="underline decoration-green-500">Developer</a>{" "}
              friendly
            </li>
            <li className="mt-4">
              <a className="underline decoration-orange-500">Privacy</a>
              -considered
            </li>
            <li className="mt-4">
              <a className="underline decoration-pink-500">Standalone</a> &{" "}
              <a className="underline decoration-yellow-400">In-brower</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
