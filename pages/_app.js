import { useEffect } from 'react';
import Router from 'next/router';
import React from 'react';
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
  useEffect(() => {
    const calendlyCode = `
    (function(){
      console.log('calendly fn execute');
      Calendly.initBadgeWidget({ url: 'https://calendly.com/amanraj1608', 
      text: 'Schedule meet', color: '#0069ff', textColor: '#ffffff', branding: true 
    });
    })();
    `;
    new Function(calendlyCode)();

    const clarityCode = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "aaotps71tq");
    `
    new Function(clarityCode)();
  }, []);


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
