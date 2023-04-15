import type { Frontmatter } from "remark-next-mdx-frontmatter";
import Footer from "../Footer";
import Header from "../Header";

type PageLayoutProps = {
  children: JSX.Element;
  frontmatter: Frontmatter;
};

/*
 * Stick footer technique comes from https://stackoverflow.com/a/72232241/3161724.
 * Take a look at https://tailwindcss.com/docs/height also.
 */

export default function BlogEntryLayout({
  children,
  frontmatter,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen px-5">
      <Header />
      <main className="prose mx-auto">
        <h1 className="dark:text-gray-300">{frontmatter.title}</h1>
        <div className="flex justify-end dark:text-gray-400">
          {frontmatter.created_at}
        </div>
        <article
          className="[&_h1]:dark:text-gray-300
                     [&_h2]:dark:text-gray-300
                     [&_code]:dark:text-gray-300
                     [&_a]:dark:text-gray-400
                     dark:text-gray-400
                     "
        >
          {children}
        </article>
      </main>
      <div className="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
  );
}
