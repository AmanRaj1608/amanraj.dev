import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import easterEgg from '../components/easterEgg';

Router.events.on('routeChangeStart', (url) => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
      </Head>
      {console.log(easterEgg, "font-family:monospace")}
      <Component {...pageProps} />
    </React.Fragment>
  )
}
