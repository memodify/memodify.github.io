import fs from "fs";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

const Page: NextPage<Props> = (props) => {
  return (
    <>
      an entry
      <Main {...props} />
    </>
  );
};

const Main: NextPage<Props> = (props) => {
  const Content = dynamic(() => import(`../../posts/${props.filename}`));
  return (
    <>
      <section className="prose" style={{ marginLeft: "10rem" }}>
        <Content />
      </section>
    </>
  );
};

export default Page;

type Props = {
  posts: string[];
  filename: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ["/blog/test", "/blog/hello"]; // getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const path = params?.id as string;
  const posts = fs.readdirSync("./posts").map((e) => e);
  const it = posts.find((e) => e.match(new RegExp(`.*${path}.*`)));
  if (!it) {
    throw new Error(`not found. ${path} is missing. check your the posts.`);
  }

  return {
    props: {
      posts,
      filename: it,
    },
  };
};
