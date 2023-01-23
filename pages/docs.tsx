import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FeatureList from "../contents/feature-list.mdx";
import RemarkableFeatures from "../contents/remarkable-features.mdx";
import GettingStarted from "../contents/getting-started.mdx";
import Settings from "../contents/settings.mdx";
import Advanced from "../contents/advanced.mdx";

const Docs: NextPage<Props> = (props) => {
  return (
    <>
      <Header />
      <Main {...props} />
      <Footer />
    </>
  );
};

const Main: NextPage<Props> = (props) => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row text-gray-700">
        <div className="md:w-1/5">
          <ul
            className="flex flex-col md:text-sm"
            style={{ position: "sticky", top: 0 }}
          >
            <ListItem className="mb-3" value="Getting Started" />
            <ListItem className="mb-3" value="Remarkable Features">
              <ul className="ml-3">
                <ListItem value="MDX">
                  <ul className="ml-3">
                    <ListItem value="Chart.js" />
                    <ListItem value="Mermaid" />
                    <ListItem value="Caution" />
                  </ul>
                </ListItem>
                <ListItem value="Command Palette" />
              </ul>
            </ListItem>
            <ListItem className="mb-3" value="Settings" />
            <ListItem className="mb-3" value="Advanced" />
            <ListItem className="mb-3" value="Feature List" />
          </ul>
          <div className="md:text-xs mt-3">
            built at {props.meta.builtAt.toISOString()}
          </div>
        </div>
        <div className="md:w-4/5">
          {(
            [
              [<GettingStarted />],
              [<RemarkableFeatures />],
              [<Settings />],
              [<Advanced />],
              [<FeatureList />],
            ] as const
          ).map(([e], idx) => (
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

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replaceAll(/ /g, "-")
    .replaceAll(/[^a-z0-9-_]+/g, "");

type ListItemProps = {
  value: string;
  className?: string;
  children?: JSX.Element;
};

function ListItem(props: ListItemProps) {
  const { value, className, children } = props;
  return (
    <li>
      <Link href={"#" + toSlug(value)} className={className}>
        {value}
        {children}
      </Link>
    </li>
  );
}
