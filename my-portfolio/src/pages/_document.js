import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Existing tags */}
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Outfit&display=swap" rel="stylesheet" />
          {/* Balise meta pour l'image Open Graph */}
          <meta property="og:image" content="https://portfolio-roissi.vercel.app/portfolio_roissi.png" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Google Analytics en utilisant le composant next/script */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-M3MQPNFCHZ" strategy="afterInteractive" />
          <Script strategy="afterInteractive" id="google-analytics">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-M3MQPNFCHZ');
            `}
          </Script>
        </body>
      </Html>
    )
  }
}

export default MyDocument;