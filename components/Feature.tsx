export default function () {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          Features
          <br className="hidden sm:block" />
          Less feature, but it's good
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            {/* <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div> */}
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Daily Noting
              </h2>
              <p className="leading-relaxed text-base">
                You can continue editing a single note so that you don't need
                creating a new file, thinking filename or title, etc. It's
                automatically categorized, classified and grouped.
                <br />
                (In progress)
              </p>
              {/* <a className="mt-3 text-yellow-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            {/* <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div> */}
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Markdown with MDX
              </h2>
              <p className="leading-relaxed text-base">
                Memodify is a note-taking application supporting{" "}
                <a href="https://mdxjs.com/" target="mdx">
                  MDX
                </a>
                .
                <br />
                <blockquote className="mt-4">
                  "MDX is an authorable format that lets you seamlessly write
                  JSX in your Markdown documents."
                </blockquote>
                (Experimental)
              </p>
              {/* <a className="mt-3 text-yellow-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            {/* <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div> */}
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                All in local
              </h2>
              <p className="leading-relaxed text-base">
                All your data is in your local machine. No your data go through
                the Internet unintentionally. No sync, no share and no publish.
              </p>
              {/* <a className="mt-3 text-yellow-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
