import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact · Aman Raj</title>
      </Head>
      <Navbar />
      <main>
        <section>
          <div className="sec_title">
            <h2>CONTACT</h2>
            <p>Let&apos;s connect if you want to work with me.</p>
          </div>
        </section>

        <section className="contact">
          <div className="contact_left">
            <p>
              If you have something intresting to talk about, feel free to
              select a time from my calendly and we can have a chat. Here&apos;s
              my <a href="mailto:archanaamanraj@gmail.com">email</a> and{" "}
              <a href="https://t.me/amanraj1608">Telegram</a>.
            </p>
            <p>
              I am also availabe at these following platforms. You can follow me
              here.
            </p>
            <div className="contact_left-follow">
              {social.map((ele, ind) => {
                return (
                  <a
                    key={ind}
                    href={ele.link}
                    rel="noopener"
                    target="_blank"
                    className="hover_eff gap"
                  >
                    <Image
                      src={ele.logo_link}
                      alt={`${ele.name} Logo`}
                      width={24}
                      height={24}
                      // layout="responsive"
                      draggable="false"
                    />
                    {ele.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact_right">
            <Script src="https://assets.calendly.com/assets/external/widget.js"></Script>
            <div
              className="calendly-inline-widget"
              style={{
                minWidth: "100%",
                height: "100%",
                maxHeight: 600,
                maxWidth: 300,
              }}
              data-url="https://calendly.com/amanraj1608/30min?hide_event_type_details=1"
            ></div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
const social = [
  {
    name: "GitHub",
    link: "https://github.com/AmanRaj1608",
    logo_link: "/icons/github.svg",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AmanRaj1608",
    logo_link: "/icons/twitter.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amanraj1608/",
    logo_link: "/icons/linkedin.svg",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCSqOv0q3qCGMFwTcoznWO1Q",
    logo_link: "/icons/youtube.svg",
  },
  // {
  //   name: "Telegram",
  //   link: "https://t.me/amanraj1608",
  //   logo_link: "/icons/telegram.svg",
  // },
  // {
  //   name: "Twitch",
  //   link: "https://www.twitch.tv/amanraj1608",
  //   logo_link: "/icons/twitch.svg",
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/amanraj1608/",
    logo_link: "/icons/instagram.svg",
  },
  // {
  //   name: "Dribble",
  //   link: "https://dribbble.com/AmanRaj1608",
  //   logo_link: "/icons/dribble.svg",
  // },
  // {
  //   name: "Product Hunt",
  //   link: "https://www.producthunt.com/@amanraj1608",
  //   logo_link: "/icons/product_hunt.svg",
  // },
];
