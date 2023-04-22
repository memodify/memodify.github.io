import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { createElement } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Advanced from "../contents/advanced.mdx";
import FeatureList from "../contents/feature-list.mdx";
import GettingStarted from "../contents/getting-started.mdx";
import RemarkableFeatures from "../contents/remarkable-features.mdx";
import Settings from "../contents/settings.mdx";
import { LeftDrawer, closeLeftDrawer } from "../components/elements/LeftDrawer";

// require("prismjs/themes/prism.min.css");
// require("prismjs/themes/prism-solarizedlight.min.css");
require("prismjs/themes/prism-tomorrow.min.css");
// require("prismjs/themes/prism-okaidia.min.css");

const Docs: NextPage<Props> = (props) => {
  return (
    // NOTE: docs-page is needed for scroll-padding defined in globals.css
    <div id="docs-page">
      <Header />
      <Main {...props} />
      <Footer />
      <LeftDrawer>
        <HeadingLinks {...props} />
      </LeftDrawer>
    </div>
  );
};

const Main: NextPage<Props> = (props: Props) => (
  <div
    className="
      container
      mx-auto
      flex flex-wrap
      p-5
      flex-col md:flex-row
      text-gray-700
      "
  >
    {/* Sidebar */}
    <div
      className="
        hidden
        md:block
        w-1/5
         [&_*]:dark:text-gray-500
        "
    >
      <HeadingLinks {...props} />
    </div>

    {/* Body */}
    <div
      className="
           w-4/5
           "
    >
      {sections
        .map((sec) => [createElement(sec)] as const)
        .map(([e], idx) => (
          <section
            className='
              prose
              first:pt-0 pt-24
              [&_code[class^="language-"]]:text-[9pt]
              [&_code[class^="language-"]]:leading-none
              [&_pre[class^="language-"]]:leading-none
              [&_*]:dark:text-gray-500
              [&_summary]:dark:text-gray-400
              [&_h1]:dark:text-gray-300
              [&_h2]:dark:text-gray-300
              [&_h3]:dark:text-gray-300
              [&_p>code]:dark:text-gray-300
              [&_p]:break-words
              '
            key={`section${idx}`}
          >
            {e}
          </section>
        ))}
    </div>
  </div>
);

export default Docs;

type Props = {
  meta: {
    builtAt: Date;
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      meta: {
        builtAt: new Date(),
      },
    },
  };
};

const sections = [
  GettingStarted,
  RemarkableFeatures,
  Settings,
  Advanced,
  FeatureList,
] as const;

const HeadingLinks = (props: Props) => {
  const children = sections.map((f) => f({}).props.children).flat();
  const items = children
    .filter((e) => e.type.match)
    .filter((e) => e.type.match(/^h[1-6]$/))
    .map((e) => ({
      level: (() => parseInt(e.type.match(/^h([1-6])$/)[1]))(),
      id: e.props.id,
      text: e.props.children,
    }));
  const toCNs = (level: number): string[] => {
    switch (level) {
      case 1:
        return ["h1", "[&:not(:nth-of-type(1))]:mt-2"];
      case 2:
        return ["h2", "ml-3", "[&>li.h2:not(:nth-of-type(1))]:mt-2"];
      case 3:
        return ["ml-6"];
    }
    return [];
  };

  return (
    <ul
      className="
        flex flex-col
        px-12 sm:px-0
        pb-12 sm:pb-0

        [&>li:not(:nth-of-type(1))]:pt-4 sm:[&>li:not(:nth-of-type(1))]:pt-2

        sm:sticky sm:top-16

        [&>.h1]:font-semibold
        [&>li]:leading-[1.5rem]
        "
    >
      {items.map((e) => (
        <li className={toCNs(e.level).join(" ")} key={e.id}>
          <Link href={`#${e.id}`} onClick={closeLeftDrawer}>
            {e.text}
          </Link>
        </li>
      ))}
      <li>Built at {props.meta.builtAt.toISOString()}</li>
    </ul>
  );
};
