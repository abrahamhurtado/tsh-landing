import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);

    return { ...initialProps };
  }
  render() {
    return (
      <html>
        <Head>
          <title>TSH Multiservicios</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
