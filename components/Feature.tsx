import Image from "next/image";
import { SVGProps } from "react";

export default function Feature() {
  return (
    <section id="feature" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-center text-gray-900 mb-2">
            Features
            <br className="hidden sm:block" />
            Less feature, but it's good
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Simple is best!
          </p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <FeatureItem title={"Daily Noting"} icon={svgPen}>
            <p className="leading-relaxed text-base">
              You can continue editing a single note so that you don't need
              creating a new file, thinking filename or title, etc. It's
              automatically categorized, classified and grouped.
              <br />
              (In progress)
            </p>
          </FeatureItem>
          <FeatureItem title={"Markdown with MDX"} icon={svgBaloon}>
            <div>
              <p className="leading-relaxed text-base">
                Memodify is a note-taking application supporting{" "}
                <a href="https://mdxjs.com/" target="mdx">
                  MDX
                </a>
                .
              </p>
              <blockquote className="mt-4">
                "MDX is an authorable format that lets you seamlessly write JSX
                in your Markdown documents."
              </blockquote>
              <p>(Experimental)</p>
            </div>
          </FeatureItem>
          <FeatureItem title={"All in local"} icon={svgInbox}>
            <p className="leading-relaxed text-base">
              All your data is in your local machine. No your data go through
              the Internet unintentionally. No sync, no share and no publish.
            </p>
          </FeatureItem>
          <FeatureItem title={"Dark mode"} icon={svgLight}>
            <>
              <p className="leading-relaxed text-base">
                Dark mode is supported for sure.
              </p>
              <img src="/dark-mode.png" width="3222px" height="1766px" />
            </>
          </FeatureItem>
          <FeatureItem title={"Command palette"} icon={svgLightening}>
            <>
              <div className="flex-grow pl-6">
                <p className="leading-relaxed text-base">
                  Command palette is useful and modern user interface.
                </p>
                <img
                  src="/with-command-palette.png"
                  width="3222px"
                  height="1766px"
                />
              </div>
            </>
          </FeatureItem>
          <FeatureItem title={"Theme"} icon={svgSparkle}>
            <div className="flex-grow pl-6">
              <p className="leading-relaxed text-base">
                Several color schemes are pre-defined.
              </p>
              <img src="/theme.png" width="3222px" height="1766px" />
            </div>
          </FeatureItem>
          <FeatureItem title={"Label"} icon={svgTag}>
            <div className="flex-grow pl-6">
              <p className="leading-relaxed text-base">
                Label is a popular function as metadata.
              </p>
              <img
                className="mt-2"
                width={"280px"}
                src="/label.png"
                style={{ boxShadow: "2px 2px 8px lightgray" }}
              />
            </div>
          </FeatureItem>
        </div>
      </div>
    </section>
  );
}

type T = SVGProps<SVGSVGElement>;

const svgProps: T = {
  xmlns: "http://www.w3.org/2000/svg",
  className: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
};

const svgPen = (
  <svg {...svgProps}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
);

interface FeatureItemProps {
  children: JSX.Element;
  title: string;
  icon: JSX.Element;
}

function FeatureItem({ children, title, icon }: FeatureItemProps) {
  return (
    <div className="p-4 md:w-1/3 flex">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-grow pl-6">
        <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

const svgBaloon = (
  <svg {...svgProps}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    />
  </svg>
);

const svgLight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const svgInbox = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
    />
  </svg>
);

const svgLightening = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const svgSparkle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const svgTag = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
    />
  </svg>
);
