import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Existing tags */}
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Outfit&display=swap" rel="stylesheet" />

          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-M3MQPNFCHZ"></script>
          <script dangerouslySetInnerHTML={
            {
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-M3MQPNFCHZ');
              `
            }
          }>
          </script>
          {/* Balise meta pour l'image Open Graph */}
          <meta property="og:image" content="https://portfolio-roissi.vercel.app/portfolio_roissi.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument