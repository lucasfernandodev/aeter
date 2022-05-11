import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br" className="isDarkTheme">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body> 
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
