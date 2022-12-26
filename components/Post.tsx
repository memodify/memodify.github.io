export default function Post({
  content,
  data,
}: {
  content: JSX.Element;
  data: any;
}) {
  return (
    <article>
      Written by {data.author} on {data.date}
      <section>{content}</section>
    </article>
  );
}
