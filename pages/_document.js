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
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <meta name="description" content="Software Engineer | Full Stack Developer" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="keywords" content="Aman, Raj, Aman Raj, aman raj, amanraj1608, AmanRaj1608, aman raj iiitv, Aman Raj Hapramp" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <meta name="msapplication-TileColor" content="#0f3057" />
          <meta name="msapplication-TileImage" content="icons/icon-192x192.png" />
          <meta name="theme-color" content="#0f3057"></meta>

          {/* Open Graph general (Facebook, Pinterest & Google+) */}
          <meta property="og:title" content="Software Engineer | Full Stack Developer" />
          <meta property="og:description" content="Aman Raj: Software Engineer | Full Stack Developer" />
          <meta property="og:image" content="/icons/icon-192x192.png" />
          <meta property="og:url" content="http://amanraj1608.netlify.app/" />
          <meta property="og:site_name" content="AmanRaj1608" />
          <meta property="og:type" content="website" />

          {/* Import CSS  and fonts*/}
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link rel="stylesheet" type="text/css" href="/main.css" />

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