import { SVGProps } from "react";

export default function Feature() {
  return (
    <section id="feature" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-4xl text-4xl font-bold title-font text-center text-gray-900 mb-2">
            Feature
          </h1>
          <h2 className="sm:text-2xl text-2xl font-bold title-font text-center text-gray-900 mb-2 mt-8">
            Not rich features, but enough
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Simple is best!
          </p>
        </div>
        <FeatureLeft
          {...{
            imagePath: "/with-command-palette.png",
            title: "Command Palette",
            text: "Command palette is an awesome UI. You can quickly invoke the palette whenever you want. In addition, a note palette is supported.",
          }}
        />
        <FeatureRight
          {...{
            title: "Dark mode",
            text: "Dark mode is supported for sure. You can change the mode whenever you want throught the command palette.",
            imagePath: "/dark-mode.png",
          }}
        />
        <FeatureLeft
          imagePath="/mdx.png"
          title="Power of MDX"
          text={
            <>
              Memodify is a note-taking application supporting{" "}
              <a href="https://mdxjs.com/" target="mdx">
                MDX
              </a>
              . "MDX is an authorable format that lets you seamlessly write JSX
              in your Markdown documents." You can see how it's rendered with
              live preview. (Experimental)
            </>
          }
        />
        <FeatureRight
          imagePath="/theme.png"
          title="Theme"
          text={
            "Several color schemes are pre-defined. You can change your active theme anytime."
          }
        />
        <FeatureLeft
          imagePath="/label-status.png"
          title="Organize notes"
          text={
            "Easily organize your notes with label which is a popular function as metadata. You can star, like, complete and trash notes, then you can filter with the statues."
          }
        />

        {/* ---- More Features ---- */}
        <div className="flex flex-col text-center w-full mb-8">
          <h2 className="sm:text-2xl text-2xl font-bold title-font text-center text-gray-900 mb-2 mt-8">
            More features
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            There are some features you are familiar with.
          </p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <FeatureItem title={"Export and import"} icon={svgLight}>
            <p>
              You can export all your notes as a plain JSON file even for{" "}
              <a href="//memodify.app" target="application">
                In-browser
              </a>{" "}
              Memodify. You can stop using Memodify anytime and transfer your
              data somewhere.
              <br /> Importing works, too, certainly.
            </p>
          </FeatureItem>
          <FeatureItem title={"Daily Noting"} icon={svgPen}>
            <p className="leading-relaxed text-base">
              You can continue editing a single note so that you don't need
              creating a new file, thinking filename or title, etc. It's
              automatically categorized, classified and grouped.
              <br />
              (In progress)
            </p>
          </FeatureItem>
          <FeatureItem title={"All in local"} icon={svgInbox}>
            <p className="leading-relaxed text-base">
              All your data is in your local machine. No your data go through
              the Internet unintentionally. No sync, no share and no publish.
              Memodify never sends your data to any remote hosts without your
              directions.
            </p>
          </FeatureItem>
          <FeatureItem title={"Images by DnD"} icon={svgBaloon}>
            <p>
              You can drag & drop images onto notes of Memodify to attach them.
              They are referrable in the note. The attached images are exported
              with notes to a JSON in base64.
            </p>
          </FeatureItem>
          <FeatureItem title={"GFM"} icon={svgLight}>
            <p>
              Memodify supports{" "}
              <a href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax">
                GitHub Flavored Markdown
              </a>{" "}
              so called GFM. You can write listing, tables, quoting, Math
              expression, etc as GitHub comments though it's a subset.
            </p>
          </FeatureItem>
          <FeatureItem title={"Zen mode"} icon={svgLightening}>
            <p>
              "Zen" mode allows you to concentrate on a task with a simplified
              UI. In memodify The simplest layout of Memodify consists of a few
              text fields.
            </p>
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

type FeatureAProps = {
  imagePath: string;
  title: string;
  text: string | JSX.Element;
};

function FeatureRight({ title, text, imagePath }: FeatureAProps) {
  return (
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{text}</p>
        {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More {svgRightArrow}
        </a> */}
      </div>
      <div className="w-2/5 sm:order-none order-first sm:h-32 h-20 sm:ml-10 inline-flex items-center flex-shrink-0">
        <img src={imagePath} />
      </div>
    </div>
  );
}

function FeatureLeft({ imagePath, title, text }: FeatureAProps) {
  return (
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="w-2/5 sm:h-32 h-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        <img src={imagePath} />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{text}</p>
        {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More {svgRightArrow}
        </a> */}
      </div>
    </div>
  );
}

function FeatureItem({ children, title, icon }: FeatureItemProps) {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3 flex">
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
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
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
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
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
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
    />
  </svg>
);

const svgPulse = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="sm:w-16 sm:h-16 w-10 h-10"
    viewBox="0 0 24 24"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);

const svgRightArrow = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-4 h-4 ml-2"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
);

const svgScissors = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="sm:w-16 sm:h-16 w-10 h-10"
    viewBox="0 0 24 24"
  >
    <circle cx="6" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
  </svg>
);

const svgPerson = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="sm:w-16 sm:h-16 w-10 h-10"
    viewBox="0 0 24 24"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
