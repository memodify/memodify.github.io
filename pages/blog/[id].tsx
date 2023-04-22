import fs from "fs";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
require("prismjs/themes/prism-tomorrow.min.css");

const Page: NextPage<Props> = (props) => {
  return (
    <div id="blog-entry-page">
      <Main {...props} />
    </div>
  );
};

export default Page;

const Main: NextPage<Props> = (props) => {
  const Content = dynamic(() => import(`../../posts/${props.filename}`));
  return (
    <main
      className='
        [&_code[class^="language-"]]:text-[9pt]
        [&_code[class^="language-"]]:leading-none
        [&_pre[class^="language-"]]:leading-none'
    >
      <Content />
    </main>
  );
};

type Props = {
  posts: string[];
  filename: string;
};

const postsDirectory = "./posts";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs.readdirSync(postsDirectory).map((fn) => {
    return {
      params: {
        id: fn.replace(/\.mdx$/, "").replace(/^[^_]*_/, ""), // e.g: whatever-something_foo-bar.mdx -> foo-bar.mdx
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const path = params?.id;
  const posts = fs.readdirSync(postsDirectory).map((e) => e);
  const it = posts.find((e) => e.match(new RegExp(`.*_?${path}.mdx?$`)));
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
