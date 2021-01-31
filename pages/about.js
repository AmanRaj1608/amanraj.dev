import Navbar from '../components/Navbar'
import Head from 'next/head'
// import Image from 'next/image'

export default function Uses() {

  return (
    <>
      <Head>
        <title>About · Aman Raj</title>
      </Head>
      <Navbar />
      <main style={{ maxWidth: "900px" }}>
        <section id="intro">
          <h1>About</h1>
          <p>Hi! I'm Aman, a third-year student at <a href="http://iiitvadodara.ac.in/" target="_blank" rel="noopener noreferrer">IIIT V</a> .
          I spend my day gaining attendance and night watching Anime.</p>
          <p>
            I love to travel and spend time with my family and friends.
          </p>
          <p>
            Say hi to my <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Girlfreind</a>
          </p>
        </section>
        <section className="about_body">

        </section>
      </main>
    </>
  )
}
