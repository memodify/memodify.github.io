import Document, { Html, Head, Main, NextScript } from "next/document";

// https://nextjs.org/docs/advanced-features/custom-document
// This customization is:
//   - to insert svg favicon.
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // https://tailwindcss.com/docs/dark-mode, https://zenn.dev/azukiazusa/articles/bee71756d66679
    return (
      <Html>
        <Head>
          {/* https://www.webcreatorbox.com/tech/svg-favicon */}
          <link rel="icon" href="/favicon256x256.svg" type="image/svg+xml" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Memodify - Simple MDX Editor"
          />
          <meta
            property="og:description"
            content="Create notes in MDX, which are for everything personally."
          />
          <meta property="og:url" content="https://memodify.com/" />
          <meta
            property="og:image"
            content="https://memodify.com/full-screenshot.png"
          />
          <meta property="og:image:alt" content="Memodify" />
        </Head>
        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
