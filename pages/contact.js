import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Contact() {

  return (
    <>
      <Head>
        <title>Contact · Aman Raj</title>
      </Head>
      <Navbar />
      <main style={{ maxWidth: "900px" }} >
        <section id="intro">
          <h1>Contact</h1>
          <p>If you're looking to get ahold of me, you can send me an email at <a href="mailto:archanaamanraj@gmail.com">archanaamanraj@gmail.com</a>.
          </p>
          
          <p>Or you can ping me on <a href="https://t.me/amanraj1608">Telegram</a>.</p>

          <p>I am also availabe at these following platforms. You can follow me here.</p>

          <div className="follow">
            {
              social.map((ele, ind) => {
                return (
                  <a key={ind}
                    href={ele.link}
                    rel="noopener" target="_blank"
                    className="hover_eff gap"
                  >
                    <img src={ele.logo_link}
                      alt={`${ele.name} Logo`}
                      draggable="false"
                    />
                    {ele.name}
                  </a>
                )
              })
            }
          </div>
        </section>
      </main>
    </>
  )
}
const social = [
  {
    name: "GitHub",
    link: "https://github.com/AmanRaj1608",
    logo_link: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amanraj1608/",
    logo_link: "/icons/linkedin.svg",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AmanRaj1608",
    logo_link: "/icons/twitter.svg",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCSqOv0q3qCGMFwTcoznWO1Q",
    logo_link: "/icons/youtube.svg",
  },
  {
    name: "Telegram",
    link: "https://t.me/amanraj1608",
    logo_link: "/icons/telegram.svg",
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/amanraj1608",
    logo_link: "/icons/twitch.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/amanraj1608/",
    logo_link: "/icons/instagram.svg",
  },
  {
    name: "Dribble",
    link: "https://dribbble.com/AmanRaj1608",
    logo_link: "/icons/dribble.svg",
  },
  {
    name: "Product Hunt",
    link: "https://www.producthunt.com/@amanraj1608",
    logo_link: "/icons/product_hunt.svg",
  }
]