import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Existing tags */}
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Outfit&display=swap"
            rel="stylesheet"
          />
          {/* Balise meta pour l'image Open Graph */}
          <meta
            property="og:image"
            content="https://www.cyrildegraeve.dev/portfolio_roissi.png"
          />
          <meta property="og:title" content="Mon Portfolio - Cyril De Graeve" />
          <meta
            property="og:description"
            content="Hi, I'm Cyril De Graeve, a Fullstack Javascript Developer, Problem solver, Freelance & Solopreneur. I look forward to working for you."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.cyrildegraeve.dev/" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@roissi" />
          <meta
            name="twitter:title"
            content="Mon Portfolio - Cyril De Graeve"
          />
          <meta
            name="twitter:description"
            content="Hi, I'm Cyril De Graeve, a Fullstack Javascript Developer, Problem solver, Freelance & Solopreneur. I look forward to working for you."
          />
          <meta
            name="twitter:image"
            content="https://www.cyrildegraeve.dev/portfolio_roissi.png"
          />

          {/* Balise meta pour la validation de Google Search Console */}
          <meta
            name="google-site-verification"
            content="EzabAfYTp3zwATo6rCNb1_dDY_Qmd-A478XlzHqLy1E"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Google Analytics en utilisant le composant next/script */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-M3MQPNFCHZ"
            strategy="afterInteractive"
          />
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
    );
  }
}

export default MyDocument;
