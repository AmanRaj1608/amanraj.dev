import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Contact() {

  return (
    <>
      <Head>
        <title>Contact · Aman Raj</title>
      </Head>
      <Navbar />
      <main>
        <section id="intro">
          <h1>Contact</h1>
          <em>Open for work.</em>
          <p>If you're looking to get ahold of me, you can send me an email at <a className="hover_eff" href="mailto:archanaamanraj@gmail.com">archanaamanraj@gmail.com</a>.
          </p>
          <p>Or you can ping me on <a className="hover_eff" href="https://t.me/amanraj1608">Telegram</a>.</p>

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
    logo_link: "https://www.flaticon.com/svg/static/icons/svg/1051/1051275.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amanraj1608/",
    logo_link: "https://www.flaticon.com/svg/static/icons/svg/145/145807.svg",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AmanRaj1608",
    logo_link: "https://www.flaticon.com/svg/static/icons/svg/733/733579.svg",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCSqOv0q3qCGMFwTcoznWO1Q",
    logo_link: "https://www.flaticon.com/svg/static/icons/svg/1384/1384060.svg",
  },
  {
    name: "Telegram",
    link: "https://t.me/amanraj1608",
    logo_link: "https://www.flaticon.com/svg/static/icons/svg/2111/2111667.svg",
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/amanraj1608",
    logo_link: "https://www.flaticon.com/svg/static/icons/svg/733/733577.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/amanraj1608/",
    logo_link: "https://www.flaticon.com/svg/static/icons/svg/174/174855.svg",
  },
  {
    name: "Dribble",
    link: "https://dribbble.com/AmanRaj1608",
    logo_link: "https://www.flaticon.com/svg/static/icons/svg/1051/1051259.svg",
  },
  {
    name: "Product Hunt",
    link: "https://www.producthunt.com/@amanraj1608",
    logo_link: "https://www.flaticon.com/svg/static/icons/svg/2111/2111556.svg",
  }
]