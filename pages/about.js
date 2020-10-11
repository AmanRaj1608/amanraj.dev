import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Uses() {

  return (
    <React.Fragment>
      <Head>
        <title>About · Aman Raj</title>
      </Head>
      <Navbar />
      <main>
        <section id="intro">
          <h1>About</h1>
          <em>Computer Science Engineer.</em>
          <p>Hi! I'm Aman, a third-year student at <a target="blank" className="hover_eff" href="http://iiitvadodara.ac.in/">@IIITV</a> . 
          I spend my day obtaining attendance. I love watching Anime and reading manga in my free time.</p>
          <p>I'm a motivated full-stack engineer who has experience building and scaling web applications. I'm also passionate about open source contributions. 
          I have a solid understanding of Data Structure and Algorithms. I'm good at database design and management. 
          I can write elegant code using Object-oriented paradigm.
          </p>
        </section>
      </main>
    </React.Fragment>
  )
}
