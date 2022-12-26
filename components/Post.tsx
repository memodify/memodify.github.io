type PostProps = {
  children: JSX.Element;
  frontmatter: {
    [key: string]: number | string;
  };
};

export default function Post({ children, frontmatter }: PostProps) {
  return (
    <article>
      {frontmatter.title ? (
        <>
          Written by {frontmatter.author} for {frontmatter.title}
        </>
      ) : undefined}
      <section>{children}</section>
      {frontmatter.created ? <>created_at: {frontmatter.created}</> : undefined}
    </article>
  );
}
