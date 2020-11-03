import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Aman Raj · AmanRaj1608</title>
      </Head>
      <Navbar />
      <main style={{ maxWidth: "800px" }} >
        <section id="intro">
          <h1>Thanks! ❤️</h1>
          <p>
            I am truly grateful to all the people that have supported me and my endeavours in development,
            which enables me to continue building free and open source software.
          </p>

          <h2>Sponsors</h2>
          <ul>
            <li><a href="https://arpitpage.z13.web.core.windows.net">Arpit Srivastava</a></li>
          </ul>

          <h2>Become a Supporter</h2>
          <ul>
            <li>Patreon: <a href="https://www.patreon.com/amanraj1608/">patreon.com/amanraj1608</a></li>
            <li>PayPal: <a href="https://paypal.me/amanraj1608">paypal.me/amanraj1608</a></li>
            <li>Buy Me a Coffee: <a href="https://ko-fi.com/amanraj1608">ko-fi.com/amanraj1608</a></li>
            <li>Buy Me a Coffee: <a href="https://www.buymeacoffee.com/amanraj1608">buymeacoffee.com/amanraj1608</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
