import { useEffect } from "react";
import Router from "next/router";
import React from "react";
import Head from "next/head";
import NProgress from "nprogress";
import * as gtag from "@/lib/gtag";
import easterEgg from "@/components/easterEgg";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import "@/public/main.css";
import "@/public/nprogress.css";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
  gtag.pageview(url);
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const clarityCode = `
      (function(c,l,a,r,i,t,y){
        console.log('clarity fn execute');
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "g61rj06et2");
      `;
      new Function(clarityCode)();
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Aman Raj · AmanRaj1608</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <>{console.log(easterEgg, "font-family:monospace")}</>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
