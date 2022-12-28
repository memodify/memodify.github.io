import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, NextPage } from "next";
import path from "path";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const Page: NextPage<Props> = (props) => {
  return (
    <div className="min-h-screen">
      <Header />
      <Main {...props} />
      <div className="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
  );
};

const Main: NextPage<Props> = (props) => {
  const toLink = (s: string) => {
    return "/blog/" + s.replace(/\.mdx?$/, "").replace(/^[^_]+_/, "");
  };
  return (
    <article className="container mx-auto prose">
      <h1>Blog</h1>
      <section>
        <ul>
          {props.posts.map((e) => {
            if (!e.published) {
              return <></>;
            }
            return (
              <li key={e.id}>
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <a href={toLink(e.id)}>{e.title}</a>
                  {e.created_at}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default Page;

interface Post {
  created_at: string | null;
  id: string;
  title: string;
  published: boolean;
}

type Props = {
  posts: Post[];
};

const postsDirectory = "./posts";

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  console.log({ params });
  const posts = fs.readdirSync(postsDirectory).map((e) => {
    const body = fs.readFileSync(path.join(postsDirectory, e));
    const { data } = matter(body);
    return {
      title: data.title,
      created_at: data.created_at
        ? dayjs(data.created_at).utc().format("YYYY-MM-DDTHH:mm:ssZ")
        : null,
      id: e,
      published: data.published || process.env.NODE_ENV != "production",
    };
  });
  return {
    props: {
      posts,
    },
  };
};
