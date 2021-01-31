import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses · Aman Raj</title>
      </Head>
      <Navbar />
      <main style={{ maxWidth: "900px" }}>
        <section id="intro">
          <h1>My Gear</h1>
          <p>Here's what tech I'm currently using for coding and music.
          Most of these have been accumulated over the past few months after remote college.
          Inspired from <a target="_blank" rel="noopener noreferrer" href="https://anshumanv.dev/">Anshumanv</a>.
          </p>
        </section>
        <section className="uses__sec">
          <div className="uses__sec__img">
            <img
              src="/img/setup.jpg"
              alt="setup"
              className="uses__sec__img-one"
              draggable="false"
            />
          </div>

          <h3 className="uses__title">Hardware 💻</h3>
          <ul className="uses__list">
            <li>Acer Swift 5 (2019)</li>
            <li>MSI Optix G241 Monitor</li>
            <li>Logitech MX Master</li>
            <li>Cosmic Byte CB-GK-11 Mechanical Keyboard</li>
            <li style={{ textDecoration: 'line-through' }}>HP 15 db1069AU</li>
          </ul>
          <h3 className="uses__title">Coding 👨‍💻</h3>
          <ul className="uses__list">
            <li>Editor: VSCode <a target="_blank" rel="noopener noreferrer" href="https://howivscode.com/AmanRaj1608">(Extensions)</a></li>
            <li>Theme: Sorcerer</li>
            <li>Terminal: ZSH / Windows Terminal</li>
          </ul>
          <h3 className="uses__title">Other Tech 🌐</h3>
          <ul className="uses__list">
            <li>OnePlus Bullets</li>
            <li>Seagate Backup Plus Slim 2 TB</li>
            <li>Apple iPod touch (2016)</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
