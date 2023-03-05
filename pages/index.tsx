import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Highlight from "@/components/Highlight";
import Head from "next/head";
import Image from "next/image";
import { RoughNotationGroup } from "react-rough-notation";

const Home = () => {
  return (
    <>
      <Head>
        <title>Aman Raj</title>
      </Head>
      <Navbar />
      <main>
        <div className="heading">
          <div className="heading_left">
            <div className="heading_left_corusel">
              <div className="heading_left_carusel__col_1">
                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_2.jpeg"
                    alt="workshop"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    Speaker experience at Polygon
                  </div>
                </div>
                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_3.jpg"
                    alt="remote"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    Remote Tech Standups
                  </div>
                </div>
                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_6.jpg"
                    alt="setup 2"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    Setup Cleaned
                  </div>
                </div>
                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_5.jpeg"
                    alt="hackathon"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    First Hackathon Win
                  </div>
                </div>
                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_1.jpg"
                    alt="aman"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    ME 2018
                  </div>
                </div>
              </div>

              <div className="heading_left_carusel__col_2">
                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_5.jpeg"
                    alt="hackathon"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    First Hackathon Win
                  </div>
                </div>
                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_2.jpeg"
                    alt="workshop"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    Speaker experience at Polygon
                  </div>
                </div>
                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_3.jpg"
                    alt="remote"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    Remote Tech Standups
                  </div>
                </div>
                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_4.jpg"
                    alt="setup"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    Setup
                  </div>
                </div>

                <div className="heading_left_carusel__item">
                  <Image
                    src="/img/img_1.jpg"
                    alt="aman"
                    width={150}
                    height={150}
                    layout="responsive"
                    className="heading_left_carusel__item-img"
                    draggable="false"
                  />
                  <div className="heading_left_carusel__item-content">
                    Me 2018
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="heading_right">
            <RoughNotationGroup show={true}>
              <h2 className="heading_right-title">AMAN RAJ.</h2>
              <h3 className="heading_right-subtitle">SDE → Generalist</h3>
              <br />
              <p className="heading_right-desc">
                Hi, I’m Aman, a{" "}
                <Highlight color="#4E31AA" type="circle">
                  computer science
                </Highlight>{" "}
                undergraduate from IIIT Vadodara. I’m curretly working as
                <Highlight color="#C7D3FC" type="highlight">
                  Blockchain Engineer
                </Highlight>
                with experience in developing and auditing projects on various
                blockchain platforms. I am passionate about Mathematics and
                Cryptography.
              </p>

              <p className="heading_right-desc">
                I also love traveling and exploring new places. In my free time,
                I like listening to music, watching{" "}
                <Highlight color="#E96479" type="circle">
                  anime
                </Highlight>{" "}
                or random stuff on YouTube.
              </p>

              <a
                className="status"
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="status__light">
                  <div className="status__light__ring"></div>
                  <div className="status__light__led"></div>{" "}
                </div>
                <div className="status__message underline-link">
                  Hire me. My resume!
                </div>
              </a>
            </RoughNotationGroup>
          </div>
        </div>

        <section>
          <div className="sec_title">
            <h2>Proof of Work...</h2>
            <p>Started as intern in web2, now working in web3 for 2yrs.</p>
          </div>
        </section>

        <section>
          <div className="sec_work">
            <div className="sec_work_left">
              <div className="sec_work_left_item">
                <Image
                  src="/img/biconomy.jpeg"
                  alt="biconomy"
                  width={40}
                  height={40}
                  className="sec_work_left_item-img"
                  draggable="false"
                />
                <div>
                  <h3 className="sec_work_left_item-title">Biconomy</h3>
                  <div className="sec_work_left_item-subtitle">
                    <p>Blockchain Engineer</p>
                    <p>April&apos;22 - Present</p>
                  </div>
                  <ul className="sec_work_left_item-ul">
                    <li className="sec_work_left_item-ul-li">
                      Collaborating on the implementation of EIP4337 Account
                      Abstraction flow, including contract development and
                      integration with the Biconomy SDK in TypeScript.
                    </li>
                    <li className="sec_work_left_item-ul-li">
                      Helped in the improvement of the EIP2771 trustedForwarder
                      gasless infrastructure by enhancing its functionality and
                      optimising its performance.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sec_work_left_item">
                <Image
                  src="/img/certik.png"
                  alt="CertiK"
                  width={40}
                  height={40}
                  className="sec_work_left_item-img"
                  draggable="false"
                />
                <div>
                  <h3 className="sec_work_left_item-title">CertiK</h3>
                  <div className="sec_work_left_item-subtitle">
                    <p>Blockchain Security</p>
                    <p>Aug&apos;21 - Apr&apos;22</p>
                  </div>
                  <ul className="sec_work_left_item-ul">
                    <li className="sec_work_left_item-ul-li">
                      Worked on upgrading the shield module in Shentu chain
                      built using Cosmos SDK.
                    </li>
                    <li className="sec_work_left_item-ul-li">
                      Worked on Solana / CosmWasm and cosmos chains projects
                      auditing.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sec_work_left_item">
                <Image
                  src="/img/polygon.png"
                  alt="Polygon"
                  width={40}
                  height={40}
                  className="sec_work_left_item-img"
                  draggable="false"
                />
                <div>
                  <h3 className="sec_work_left_item-title">Polygon</h3>
                  <div className="sec_work_left_item-subtitle">
                    <p>Blockchain Engineer Intern</p>
                    <p>Mar&apos;21 - Aug&apos;22</p>
                  </div>
                  <ul className="sec_work_left_item-ul">
                    <li className="sec_work_left_item-ul-li">
                      Wrote tests and docs for the matic.js library.
                    </li>
                    <li className="sec_work_left_item-ul-li">
                      Worked on NFT Bridge to transfer assets (ERC721, ERC1155)
                      between root and child chain.
                    </li>
                    <li className="sec_work_left_item-ul-li">
                      Built NFT Minter (
                      <a
                        href="https://mintnft.today/"
                        target=" _blank"
                        rel="noopener noreferrer"
                      >
                        mintnft.today
                      </a>
                      ) to mint and list NFTs on Arkane and OpenSea marketplace.
                    </li>
                    <li className="sec_work_left_item-ul-li">
                      Enhanced the{" "}
                      <a
                        href="https://wallet.matic.network"
                        target=" _blank"
                        rel="noopener noreferrer"
                      >
                        WalletWeb V2
                      </a>{" "}
                      to catch dropped transactions.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sec_work_left_item">
                <Image
                  src="/img/ethindia.png"
                  alt="ethindia"
                  width={40}
                  height={40}
                  className="sec_work_left_item-img"
                  draggable="false"
                />
                <div>
                  <h3 className="sec_work_left_item-title">Ethereum India</h3>
                  <div className="sec_work_left_item-subtitle">
                    <p>Fellowship 2.0 ⟠</p>
                    <p>Feb&apos;21 - Apr&apos;21</p>
                  </div>
                  <ul className="sec_work_left_item-ul">
                    <li className="sec_work_left_item-ul-li">
                      20 Web2 developers were selected to learn and build Web3.
                    </li>
                    <li className="sec_work_left_item-ul-li">
                      Built hackathon projects, contributed to the Ethereum
                      ecosystem projects under industry mentors.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sec_work_left_item">
                <Image
                  src="/img/hapramp.png"
                  alt="Hapramp"
                  width={40}
                  height={40}
                  className="sec_work_left_item-img"
                  draggable="false"
                />
                <div>
                  <h3 className="sec_work_left_item-title">Hapramp Studio</h3>
                  <div className="sec_work_left_item-subtitle">
                    <p>Software Engineer Intern</p>
                    <p>Sep&apos;20 - Feb&apos;21</p>
                  </div>
                  <ul className="sec_work_left_item-ul">
                    <li className="sec_work_left_item-ul-li">
                      Worked on Hapramp’s GoSocial product with 500k+ downloads.
                    </li>
                    <li className="sec_work_left_item-ul-li">
                      Leveraged my knowledge of Next.js, Redux, and SSR to
                      develop the product’s web version from scratch.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sec_work_right">
              <Image
                src="/img/siuu.svg"
                alt="work"
                width={400}
                height={400}
                layout="responsive"
                className="sec_work_right-img"
                draggable="false"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="sec_title">
            <h2>Skills...</h2>
            <p>Tech nerd always intrested in learning new stacks.</p>
          </div>
        </section>
        {/* this section copied from codepen and modified a little */}
        <section className="marquees-wrapper">
          <div className="marquee marquee-1">
            <ul className="marquee__content scroll">
              <li>Proficient</li>
              <li>&#183;</li>
              <li>TypeScript</li>
              <li>&#183;</li>
              <li>JavaScript</li>
              <li>&#183;</li>
              <li>Go</li>
              <li>&#183;</li>
              <li>Learning</li>
              <li>&#183;</li>
              <li>Rust</li>
              <li>&#183;</li>
            </ul>
            <ul className="marquee__content scroll" aria-hidden="true">
              <li>Proficient</li>
              <li>&#183;</li>
              <li>TypeScript</li>
              <li>&#183;</li>
              <li>JavaScript</li>
              <li>&#183;</li>
              <li>Go</li>
              <li>&#183;</li>
              <li>Learning</li>
              <li>&#183;</li>
              <li>Rust</li>
              <li>&#183;</li>
            </ul>
          </div>
          <div className="marquee marquee-2">
            <ul className="marquee__content scroll">
              <li>Frontend - React.js / Next.js</li>
              <li>&#183;</li>
              <li>Backend - Node.js / Nest.js</li>
              <li>&#183;</li>
              <li>App dev - React Native</li>
              <li>&#183;</li>
              <li>Database - MYSQL / MongoDB NoSQL / Redis</li>
              <li>&#183;</li>
            </ul>
            <ul className="marquee__content scroll" aria-hidden="true">
              <li>Frontend - React.js / Next.js</li>
              <li>&#183;</li>
              <li>Backend - Node.js / Nest.js</li>
              <li>&#183;</li>
              <li>App dev - React Native</li>
              <li>&#183;</li>
              <li>Database - MYSQL / MongoDB NoSQL / Redis</li>
              <li>&#183;</li>
            </ul>
          </div>
          <div className="marquee marquee-3">
            <ul className="marquee__content scroll">
              <li>Solidity</li>
              <li>&#183;</li>
              <li>Yul</li>
              <li>&#183;</li>
              <li>Subgraphs</li>
              <li>&#183;</li>
              <li>ChainLink</li>
              <li>&#183;</li>
              <li>Cosmos SDK</li>
              <li>&#183;</li>
              <li>Relayers</li>
              <li>&#183;</li>
            </ul>
            <ul className="marquee__content scroll" aria-hidden="true">
              <li>Solidity</li>
              <li>&#183;</li>
              <li>Yul</li>
              <li>&#183;</li>
              <li>Subgraphs</li>
              <li>&#183;</li>
              <li>ChainLink</li>
              <li>&#183;</li>
              <li>Cosmos SDK</li>
              <li>&#183;</li>
              <li>Relayers</li>
              <li>&#183;</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
