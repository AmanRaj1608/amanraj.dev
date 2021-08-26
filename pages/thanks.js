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
            I am truly grateful to all the people that have supported me and my endeavours in development.
            Thanks to everyone who supported me to continue learning.
          </p>

          <h2>Crypto</h2>
          <ul>
            <li>amanraj1608.eth</li>
            <li><a href="https://etherscan.io/address/0x0197d7FaFCA118Bc91f6854B9A2ceea94E676585">ETH: 0x0197d7FaFCA118Bc91f6854B9A2ceea94E676585</a></li>
            <li><a href="https://www.blockchain.com/btc/address/bc1q9tsjdvhg3stpzav6u2zvhk504v6m28m3secfuu">BTC: bc1q9tsjdvhg3stpzav6u2zvhk504v6m28m3secfuu</a></li>
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
