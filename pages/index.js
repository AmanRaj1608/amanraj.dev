import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'
import Image from 'next/image'

export default function Index() {
  return (
    <>
      <Head>
        <title>Aman Raj · AmanRaj1608</title>
      </Head>
      <Navbar />
      <main style={{padding: "1vh"}}>
        <div className="heading">
          <div className="left_sec">
            <Image
              src="https://avatars1.githubusercontent.com/u/42104907"
              alt="Aman"
              width={250}
              height={250}
              className="my_img"
              draggable="false"
            />
            <div className="profile_badge">
              🍀
            </div>
          </div>
          <div className="right_sec">
            <h2 className="title">
              Aman Raj,
              <br />
              <span id="blue_text">Student/SDE → Generalist</span>
            </h2>
            <br />
            <h2 className="description">I'm <span className="name">Aman</span>,
            a third-year Computer Science undergraduate at IIIT Vadodara. </h2>
          </div>
        </div>
        {/*<hr className="break" />*/}
        <section className="semi" data-sr-id="0" >
          <div className="semi_title">Background</div>
          <div className="semi_desc">
            <p> I'm currently a CSE undergraduate <mark>👨🏻‍🎓</mark> student at <strong><a className="iiitv" href="http://iiitvadodara.ac.in/" target="_blank">
              Indian Institute of Information Technology Vadodara</a></strong> and a Software Engineer 👨🏻‍💻 building applications with some awesome people. </p>

            <p> I'm a motivated <strong>full-stack engineer</strong> who has experience building and scaling web applications. I have also experience in technologies like <strong> Blockchain and Machine learning.</strong>
            </p>

            <p> <strong>When I'm not in front of a 💻 screen</strong>, I’m probably watching Anime, listening music, watching random stuff on YouTube, or sleeping. </p>

            <a className="status" href="/Aman_Raj.pdf" target=" _blank" rel="noopener noreferrer">
              <div className="status__light">
                <div className="status__light__ring"></div>
                <div className="status__light__led"></div> </div>
              <div className="status__message underline-link" >Currently seeking opportunities for Summer Intern starting June 2020!</div>
            </a>
          </div>
        </section>

        <hr className="break" />

        <section className="semi" >
          <div className="semi_title">Achievements</div>
          <div className="semi_desc">
            <div className="achi">

              {/* 1 */}
              <div className="achi_name">
                <a href="https://www.computer.org/education/oracle_hackathon_2020" target="_blank" className="arrow-link">
                  🏆 Winners at National Gov-TechThon 2020 🏆
                </a>
              </div>
              <p>Hosted by <strong>IEEE Computer Society</strong> and <strong>National Informatics Center (NIC) India. </strong>

              We designed and implemented a prototype of Unsupervised Test app. All projects rights are given to NIC.
              <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🏆 Won 1.25lakhs cash Prize. Summer Intern oppurtunity at NIC.
                  <br />
                  🌟 Also our name got mentioned on computers.org IEEE.
                </p>
              </p>
              <div className="achi_used">
                <span className="achi_used__item">ML</span>
                <span className="achi_used__item">Electron.js</span>
                <span className="achi_used__item">Oracle</span>
                <span className="achi_used__item">Next.js</span>
              </div>
            </div>

            {/* 2 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.hackerearth.com/challenges/hackathon/hackatom-india/" target="_blank" className="arrow-link">
                  Winners at HackAtom India: Build The Cosmos
                </a>
              </div>
              <p>
                Used Ethermint and Solidity to create hack. This was first blockchain specialised win for our team.
                We !DevDemons won uder the special mentions category.
              <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🌟 Won $500 USD.
                </p>
              </p>
              <div className="achi_used">
                <span className="achi_used__item">Ethermint</span>
                <span className="achi_used__item">Solidity</span>
                <span className="achi_used__item">Node.js</span>
                <span className="achi_used__item">React</span>
                <span className="achi_used__item">Web3.js</span>
                <span className="achi_used__item">Flutter</span>
              </div>
            </div>

            {/* 3 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://devfolio.co/submissions/offsubmit" target="_blank" className="arrow-link">
                  Runner Up in Eduthon
              </a>
              </div>
              <p>A national-level hackathon by <strong>IIIT Lucknow</strong> on Devfolio. We designed and implemented a prototype of Unsupervised Test app.
              <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🌟 Won 10k cash prize and devfolio schwag.
                </p>
              </p>
              <div className="achi_used">
                <span className="achi_used__item">Matic</span>
                <span className="achi_used__item">Solidity</span>
                <span className="achi_used__item">React.js</span>
                <span className="achi_used__item">Spring Boot</span>
                <span className="achi_used__item">Twilio</span>
                <span className="achi_used__item">Portis</span>
              </div>
            </div>

            {/* 4 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.linkedin.com/posts/amanraj1608_hackiiitv-hackiiitv-activity-6588635125444116480-dTHg/" target="_blank" className="arrow-link">
                  Winners in HackIIITV 2019
              </a>
              </div>
              <p>An inter institute level hackathon by <strong>IIIT Vadodara</strong>.
              We designed a real-time communication app for the specially-abled.
              <br />
                <span className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  ⭐ Won GitHub schwags.
                </span>
              </p>
              <div className="achi_used">
                <span className="achi_used__item">cnn-classifier</span>
                <span className="achi_used__item">Django</span>
              </div>
            </div>

            {/* 5 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.teriin.org/olympiad/" target="_blank" className="arrow-link">
                  7th rank in National Environment Olympiad 2014
                </a>
              </div>
              <p>
                Got 7th rank 🌳 in annual written examination on environment initiated by The Energy and Resources Institute (TERI).
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
