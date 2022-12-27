import type { Frontmatter } from "remark-next-mdx-frontmatter";

type PageLayoutProps = {
  children: JSX.Element;
  frontmatter: Frontmatter;
};

export default function PageLayout({ children, frontmatter }: PageLayoutProps) {
  return (
    <article className="prose">
      {frontmatter.title}
      {children}
    </article>
  );
}
