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
          <p>
            I’m a third-year CSE student at IIITV, a EthIndia Fellow and an intern at Polygon (Prev. Matic Network) for Summer 2021.
          </p>
          <p>
            My expertise lies in
            <ul>
              <li><strong>Frontend (React, Hooks, Context, Redux, Nextjs)</strong></li>
              <li><strong>Backend (Node.js, Go)</strong></li>
              <li><strong>Database (MongoDB, SQL, Redis)</strong></li>
              <li><strong>Cloud (AWS, Lamda, Digital Ocean)</strong></li>
              <li><strong>Blockchain (Solidity, Eth, The Graph, Ocean Protocol)</strong></li>
            </ul>
          </p>
          <p>
            Here is my <a href="https://amanraj.dev/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </p>

          <p>
            Aprart from professional things I love Anime, I have watched 200+ shows.
            I love to travel and spend time with my family and friends. Lately got a new hobbie of looking at crypto prices.
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
