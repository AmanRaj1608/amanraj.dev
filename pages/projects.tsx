import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Aman Raj</title>
      </Head>
      <Navbar />
      <main>
        <section>
          <div className="sec_title">
            <h2>PROJECTS</h2>
            <p>Some of the projects I worked on in the past (Not updated in a while).</p>
          </div>
        </section>

        <section className="projects_list">
          {projectList.map((ele, ind) => {
            return (
              <div className="projects_list-item" key={ind}>
                <div className="project_top">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="project_icon_file"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
                  </svg>
                  <div className="css-0">
                    <button
                      type="button"
                      className="project_icon_open"
                      aria-label="Open github link"
                    >
                      <a
                        href={ele.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          // size="30"
                          aria-hidden="true"
                          focusable="false"
                          height="30"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 
                            26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                          ></path>
                        </svg>
                      </a>
                    </button>
                    <button
                      type="button"
                      className="project_icon_open"
                      aria-label="Open website"
                    >
                      <a
                        href={ele.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          // size="30"
                          aria-hidden="true"
                          focusable="false"
                          height="30"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
                        </svg>
                      </a>
                    </button>
                  </div>
                </div>
                <p className="project_title">{ele.name}</p>
                <p className="project_desc">{ele.description}</p>
                <div className="project_last">
                  <p className="project_last_text">{ele.language}</p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    focusable="false"
                    className="project_last_icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                  </svg>
                  <p className="project_last_text" style={{ marginLeft: 4 }}>
                    {ele.stars}
                  </p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    focusable="false"
                    className="project_last_icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                  </svg>
                  <p className="project_last_text" style={{ marginLeft: 4 }}>
                    {ele.forks}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;

const projectList = [
  {
    name: "Offsubmit",
    description:
      "Webapp for conducting online examination without internet using Cryptographic algorithms and Hashing techniques. Used Ethereum and IPFS for decentralised storage.",
    language: "React.js | Ethereum",
    stars: "24",
    forks: "6",
    link: "https://offsubmit.vercel.app/",
    githubLink: "https://github.com/BakaOtaku/Offsubmit/",
  },
  {
    name: "Google-Meet-Scheduler",
    description:
      "Bot to join google meet automatically without opening the browser.",
    language: "Node.js",
    stars: "172",
    forks: "28",
    link: "https://github.com/AmanRaj1608/Google-Meet-Scheduler",
    githubLink: "https://github.com/AmanRaj1608/Google-Meet-Scheduler",
  },
  {
    name: "OceanCaller",
    description:
      "Built an app using Ocean Protocol to share contact dataset. Integrated Filecoin to persist datasets of users maintaing privacy as well as rewarding users with ocean token",
    language: "React-native",
    stars: "5",
    forks: "1",
    link: "https://expo.io/@amanraj1608/projects/OceanCaller",
    githubLink: "https://github.com/BakaOtaku/oceancaller",
  },
  {
    name: "Ecommerce app",
    description:
      "Flipkart clone. Features like category, cart, payments, past orders. Admin can add, delete products. Used Sequelize ORM for MySql database.",
    language: "React.js | Node.js",
    stars: "7",
    forks: 2,
    link: "https://my-flipkart.surge.sh/",
    githubLink: "https://github.com/only-2/Ecommerce-app",
  },
  {
    name: "devfest-19",
    description:
      "Worked in the core team to co-organize GDG Gandhinagar’s DevFest 19. Developed the webpage in Angular 7 in collaboration with the team.",
    language: "Angular 7",
    stars: "9",
    forks: "11",
    link: "https://github.com/gdg-gandhinagar/devfest-19",
    githubLink: "https://github.com/gdg-gandhinagar/devfest-19",
  },
  {
    name: "Minimal-Audio-Visualizer",
    description: "Represent your sound in a gradient colored Visualization",
    language: "JavaScript",
    stars: "13",
    forks: 0,
    link: "https://amanraj1608.github.io/Minimal-Audio-Visualizer/",
    githubLink: "https://github.com/AmanRaj1608/Minimal-Audio-Visualizer",
  },
  {
    name: "cerebro-web-2020",
    description: "Cerebro Web 2020",
    language: "React.js",
    stars: "16",
    forks: "15",
    link: "http://cerebro2020.iiitvadodara.ac.in/",
    githubLink: "https://github.com/cerebro-iiitv/cerebro-web-2021",
  },
  {
    name: "getmein-web",
    description: "Portal to get an invite to IIITV GitHub organization",
    language: "Node.js",
    stars: "26",
    forks: "41",
    link: "https://getmein.glitch.me/",
    githubLink: "https://github.com/iiitv/getmein-web",
  },
];

// export async function getStaticProps() {
//   let projectList = [];
//   try {
//     const url1 = `https://api.github.com/users/amanraj1608/repos`;
//     const url2 = `https://api.github.com/users/bakaotaku/repos`;
//     const url3 = `https://api.github.com/users/only-2/repos`;
//     const url4 = `https://api.github.com/users/amanraj1608/repos?page=2`;

//     const val = process.env.TOKEN;

//     console.log(val);
//     if(val) {
//       const headers = {
//         Authorization: `token ${val}`
//       }
//       const res1 = await fetch(url1, {
//         "method": "GET",
//         "headers": headers
//       })
//       const n1 = await res1.json();
//       const res2 = await fetch(url2, {
//         "method": "GET",
//         "headers": headers
//       })
//       let n2 = await res2.json();
//       const res3 = await fetch(url3, {
//         "method": "GET",
//         "headers": headers
//       })
//       const n3 = await res3.json();
//       const res4 = await fetch(url4, {
//         "method": "GET",
//         "headers": headers
//       })
//       const n4 = await res4.json();
//       projectList = [...n1, ...n2, ...n3, ...n4];
//     }
//     else {
//       const res1 = await fetch(url1)
//       const n1 = await res1.json();
//       const res2 = await fetch(url2)
//       let n2 = await res2.json();
//       const res3 = await fetch(url3)
//       const n3 = await res3.json();
//       const res4 = await fetch(url4)
//       const n4 = await res4.json();
//       projectList = [...n1, ...n2, ...n3, ...n4];
//     }
//     console.log(projectList);
//   } catch {
//     console.log("Token not found");
//   }

//   projectList.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : ((b.stargazers_count < a.stargazers_count) ? -1 : 0));
//   projectList = projectList.filter((e) => e.fork == false)
//   return {
//     props: {
//       projectList,
//     },
//   }
// }
