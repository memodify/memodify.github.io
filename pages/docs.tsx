import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FeatureList from "../contents/feature-list.mdx";
import RemarkableFeatures from "../contents/remarkable-features.mdx";
import GettingStarted from "../contents/getting-started.mdx";
import Settings from "../contents/settings.mdx";
import Advanced from "../contents/advanced.mdx";
import { createElement } from "react";

const Docs: NextPage<Props> = (props) => {
  return (
    <>
      <Header />
      <Main {...props} />
      <Footer />
    </>
  );
};

const sections = [
  GettingStarted,
  RemarkableFeatures,
  Settings,
  Advanced,
  FeatureList,
] as const;

const Main: NextPage<Props> = (props) => {
  const children = sections.map((f) => f({}).props.children).flat();
  const items = children
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
        return ["h2", "ml-3", " [&>li.h2:not(:nth-of-type(1))]:mt-2"];
      case 3:
        return ["ml-6"];
    }
    return [];
  };
  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row text-gray-700">
        {/* Sidebar */}
        <div className="md:w-1/5">
          <ul
            className="flex flex-col md:text-sm [&>*.h1]:font-semibold"
            style={{ position: "sticky", top: 0 }}
          >
            {items.map((e) => (
              <ListItem
                id={e.id}
                value={e.text}
                className={toCNs(e.level).join(" ")}
                key={e.id}
              />
            ))}
          </ul>
          <div className="md:text-xs mt-3">
            built at {props.meta.builtAt.toISOString()}
          </div>
        </div>

        {/* Body */}
        <div className="md:w-4/5">
          {sections
            .map((sec) => [createElement(sec)] as const)
            .map(([e], idx) => (
              <section
                className={[idx > 0 ? "pt-24" : null, "prose"].join(" ")}
                key={`section${idx}`}
              >
                {e}
              </section>
            ))}
        </div>
      </div>
    </>
  );
};

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

type ListItemProps = {
  id: string;
  value: string;
  className?: string;
  children?: JSX.Element;
};

function ListItem(props: ListItemProps) {
  const { value, id, className, children } = props;
  return (
    <li className={className}>
      <Link href={`#${id}`}>
        {value}
        {children}
      </Link>
    </li>
  );
}
