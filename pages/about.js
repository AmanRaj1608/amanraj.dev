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
          <p>
            I love to travel and spend time with my family and friends.
          </p>
        </section>
        <section className="about_body">
          <Image
            src="/img/fam.jpg"
            alt="Aman"
            className="about_img"
            unsized
          />
          <Image
            src="/img/me.jpg"
            alt="Aman"
            className="about_img"
            draggable="false"
            unsized
          />
          <Image
            src="/img/har.jpg"
            alt="Aman"
            className="about_img"
            draggable="false"
            unsized
          />
          <Image
            src="/img/ok.jpg"
            alt="Aman"
            className="about_img"
            draggable="false"
            unsized
          />
        </section>
      </main>
    </>
  )
}
