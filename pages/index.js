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
      <main style={{ padding: "1vh" }}>
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
            SDE Intern at Polygon. </h2>
          </div>
        </div>
        {/*<hr className="break" />*/}
        <section className="semi" data-sr-id="0" >
          <div className="semi_title">Background</div>
          <div className="semi_desc">
            <p> I'm currently a CSE undergraduate <mark>👨🏻‍🎓</mark> student at <strong><a className="iiitv" href="http://iiitvadodara.ac.in/" rel="noopener noreferrer" target="_blank">
              Indian Institute of Information Technology Vadodara</a></strong> and a Software Engineer 👨🏻‍💻 building applications with some awesome people. </p>

            <p> I'm a motivated <strong>full-stack engineer</strong> who has experience building and scaling web applications. I have also experience in technologies like <strong> Blockchain and Machine learning.</strong>
            </p>

            <p>In my free time, I watch Anime, listens music, watch random stuff on YouTube, or sleep.</p>

            <a className="status" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <div className="status__light">
                <div className="status__light__ring"></div>
                <div className="status__light__led"></div> </div>
              <div className="status__message underline-link">Open for full time opportunities offers!</div>
            </a>
          </div>
        </section>

        <hr className="break" />

        <section className="semi" >
          <div className="semi_title">Proof of Work</div>
          <div className="semi_desc">
            <div className="achi">

              {/* 1 */}
              <div className="expi__name">
                Polygon (Prev. Matic Network) ⟠
              </div>
              <div className="achi_name__sub">
                Software Engineer Intern (Mar'21 - Present)
              </div>
              <ul className="achi_list">
                <li className="achi_name__li">
                  Building polygon L2 projects like NFT Minter
                </li>
              </ul>

              {/* 3 */}
              <div className="expi__name">
                Devfolio Ethereum India ⟠
              </div>
              <div className="achi_name__sub">
                Fellowship (Feb'21 - Present)
              </div>
              <ul className="achi_list">
                <li className="achi_name__li">
                  Was selected in the top <strong>20 Web2 developers</strong> to learn and build Web3.
                </li>
                <li className="achi_name__li">
                  Contributing to the <strong>Ethereum ecosystem</strong> under industry mentors.
                </li>
              </ul>

              {/* 5 */}
              <div className="expi__name">
                Hapramp Studio
              </div>
              <div className="achi_name__sub">
                Software Engineer Intern (Sep'20 - Feb'21)
              </div>
              <ul className="achi_list">
                <li className="achi_name__li">
                  Build <a href="http://gosocial.io/" target=" _blank" rel="noopener noreferrer">gosocial.io</a>
                </li>
                <li className="achi_name__li">
                  Worked on Hapramp’s GoSocial product with <strong>500k+ downloads</strong>.
                </li>
                <li className="achi_name__li">
                  Leveraged my knowledge of Next.js, Redux, and SSR to develop the product’s web
                  version from scratch.
                </li>
              </ul>

              {/* 4 */}
              {/* <div className="expi__name">
                GDG Gandhinagar
              </div>
              <div className="achi_name__sub">
                Frontend Engineer Intern (Sep'19 - Oct'19)
              </div>
              <ul className="achi_list">
                <li className="achi_name__li">
                  Worked in the core team to <strong>co-organize</strong> GDG Gandhinagar’s DevFest 19.
                </li>
                <li className="achi_name__li">
                  Developed the webpage in Angular 7 in collaboration with the team.
                </li>
              </ul> */}
            </div>
          </div>
        </section>

        <hr className="break" />

        <section className="semi" >
          <div className="semi_title">Achievements</div>
          <div className="semi_desc">

            {/* 0 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://devpost.com/software/oceancaller" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Ocean Protocol: Data Economy Challenge
                </a>
              </div>
              <p>Hosted by <strong>Ocean Protocol</strong> hackathon created decentralized Caller Id app.
              <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🌊 Won $2k prize for best integration into phone data as data service.
              <br />
                </p>
              </p>
              <div className="achi_used">
                <span className="achi_used__item">Ethereum</span>
                <span className="achi_used__item">Ocean Protocol</span>
                <span className="achi_used__item">React-Native</span>
                <span className="achi_used__item">Node.js</span>
                <span className="achi_used__item">Flask</span>
              </div>
            </div>

            {/* 0 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://medium.com/harmony-one/winners-of-the-hack-the-horizon-hackathon-ae04f95b71ab" rel="noopener noreferrer" target="_blank" className="arrow-link">
                  Harmony One: Hack the Horizon
                </a>
              </div>
              <p>Hosted by <strong>Harmony</strong> hackathon developed a product GitMony. GitMony uses <strong>Harmony Bridge</strong> and <strong>Chainlink oracle</strong>,
              to deliver a completely decentralized platform to reward opensource contributors.
              <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  ☮️ Won $2k second prize and other schwags.
              <br />
                </p>
              </p>
              <div className="achi_used">
                <span className="achi_used__item">Chainlink</span>
                <span className="achi_used__item">Harmony</span>
                <span className="achi_used__item">Node.js</span>
                <span className="achi_used__item">Next.js</span>
                <span className="achi_used__item">Solidity</span>
              </div>
            </div>

            {/* 1 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.computer.org/education/oracle_hackathon_2020" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Goverment: Gov-TechThon 2020
                </a>
              </div>
              <p>Hosted by <strong>IEEE Computer Society</strong> and <strong>National Informatics Center (NIC) India. </strong>
              We designed and implemented a prototype of Unsupervised Test app. All projects rights are given to NIC.
              <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🏆 Won 1.25lakhs cash Prize. Summer Intern oppurtunity at NIC.
                  <br />
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
                <a href="https://www.hackerearth.com/challenges/hackathon/hackatom-india/" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Winners at HackAtom India: Build The Cosmos
                </a>
              </div>
              <p>
                Won all India blockchain hackathon for developing an app using
                cosmos <strong>Ethermint</strong> tech stack.
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
                <a href="https://devfolio.co/submissions/offsubmit" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Runner Up in Eduthon
              </a>
              </div>
              <p>A national-level hackathon by <strong>IIIT Lucknow</strong> on Devfolio. Developed an application to
              conduct online examination offline.
              {/**
                <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🌟 Won 10k cash prize and devfolio schwag.
                </p>
                
              */}
              </p>
              {/**
                <div className="achi_used">
                <span className="achi_used__item">Matic</span>
                <span className="achi_used__item">Solidity</span>
                <span className="achi_used__item">React.js</span>
                <span className="achi_used__item">Spring Boot</span>
                <span className="achi_used__item">Twilio</span>
                <span className="achi_used__item">Portis</span>
              </div>
              */}
            </div>

            {/* 4 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.linkedin.com/posts/amanraj1608_hackiiitv-hackiiitv-activity-6588635125444116480-dTHg/" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Winners in HackIIITV 2019
              </a>
              </div>
              <p>An intra institute level hackathon by <strong>IIIT Vadodara</strong>.
              We designed a real-time communication app for the specially-abled.
              {/**
                <br />
                <span className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  ⭐ Won GitHub schwags.
                </span>
              */}
              </p>
              {/**
                <div className="achi_used">
                <span className="achi_used__item">cnn-classifier</span>
                <span className="achi_used__item">Django</span>
              </div>
              */}
            </div>

            {/* 5 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.teriin.org/olympiad/" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  National Environment Olympiad 2014
                </a>
              </div>
              <p>
                Got 7th rank 🌳 in annual written examination on environment initiated by The Energy and Resources Institute (TERI).
              </p>
            </div>
          </div>
        </section>

        <hr className="break" />

      </main>
      <Footer />
    </>
  )
}
