import Router from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import * as gtag from '../lib/gtag';
import NProgress from 'nprogress';
import easterEgg from '../components/easterEgg';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
  gtag.pageview(url);
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Aman Raj · AmanRaj1608</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {console.log(easterEgg, "font-family:monospace")}
      <Component {...pageProps} />
    </React.Fragment>
  )
}
