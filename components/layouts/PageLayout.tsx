import type { Frontmatter } from "remark-next-mdx-frontmatter";

export default function PageLayout({
  children,
  frontmatter,
}: {
  children: JSX.Element;
  frontmatter: Frontmatter;
}) {
  return (
    <>
      {frontmatter.title}
      {children}
    </>
  );
}
