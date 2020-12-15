import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>

          {/* Import Images */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/icons/4.jpg" />
          <meta name="description" content="student, software engineer" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="keywords" content="Aman, Raj, Aman Raj, amanraj1608, AmanRaj1608, aman raj iiitv, Aman Raj Hapramp, Aman Raj GoSocial" />
          <meta name="msapplication-TileColor" content="#fa7f72" />
          <meta name="msapplication-TileImage" content="/icons/4.jpg" />
          <meta name="theme-color" content="#389393"></meta>

          {/* Open Graph general (Facebook, Pinterest & Google+) */}
          <meta property="og:title" content="Aman Raj" />
          <meta property="og:description" content="student, software engineer, developer" />
          <meta property="og:image" content="/icons/4.jpg" />
          <meta property="og:site_name" content="AmanRaj1608" />
          <meta property="og:type" content="website" />

          {/* Open Graph general (Twitter) */}
          <meta name="twitter:card" content="Aman Raj" />
          <meta name="twitter:site" content="@AmanRaj1608" />
          <meta name="twitter:title" content="Aman Raj Portfolio" />
          <meta name="twitter:description" content="student, software engineer, developer" />
          <meta name="twitter:image" content="/icons/4.jpg" />

          {/* Import CSS  and fonts*/}
          <link rel="preconnect" rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link rel="preconnect" rel="stylesheet" type="text/css" href="/main.css" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <link rel="prefetch" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&family=PT+Mono&display=swap" as="font" type="font" crossOrigin="true" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;