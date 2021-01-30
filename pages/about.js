import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

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
          <em>Hi! I'm Aman, a third-year student at <a target="blank" className="hover_eff" href="http://iiitvadodara.ac.in/">@IIITV</a> .
          I spend my day gaining attendance. I love watching Anime and reading manga in my free time.</em>
          <p>I'm a motivated full-stack engineer who has experience building and scaling web applications. I'm also passionate about open source contributions.
          I have a solid understanding of Data Structure and Algorithms. I'm good at database design and management.
          I can write elegant code using Object-oriented paradigm.
          </p>
          <p>
            I love to travel and spend time with my family and friends.
          </p>
        </section>
        <section className="about_body">

        </section>
      </main>
    </>
  )
}
