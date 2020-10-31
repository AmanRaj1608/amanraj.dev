import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Projects({ projectList }) {

  return (
    <>
      <Head>
        <title>Projects · Aman Raj</title>
      </Head>
      <Navbar />
      <main>
        <section className="projects_intro" id="intro">
          <h1 >Projects</h1>
          <em>
            List of all the projects I have built or contributed to.
          </em>
        </section>
        <section className="projects_list">
          {
            projectList.map((ele, ind) => {
              return (
                <a key={ind}
                  className="projects_one"
                  href={ele.html_url}
                  rel="noopener noreferrer" target="_blank" title={ele.name}
                >
                  <div>
                    <h3 className="project_one_title">{ele.name}</h3>
                    <h4 className="project_one_star">{ele.stargazers_count} 🌟</h4>
                    <p className="project_one_desc">{ele.description}</p>
                  </div>
                </a>
              )
            })
          }
        </section>
      </main>
    </>
  )
}


export async function getStaticProps() {
  let projectList = [];
  try {
    const url1 = `https://api.github.com/users/amanraj1608/repos`;
    const url2 = `https://api.github.com/users/bakaotaku/repos`;
    const url3 = `https://api.github.com/users/only-2/repos`;
    const url4 = `https://api.github.com/users/amanraj1608/repos?page=2`;
    
    const val = process.env.TOKEN;

    console.log(val);
    if(val) {
      const headers = {
        Authorization: `token ${val}`
      }
      const res1 = await fetch(url1, {
        "method": "GET",
        "headers": headers
      })
      const n1 = await res1.json();
      const res2 = await fetch(url2, {
        "method": "GET",
        "headers": headers
      })
      let n2 = await res2.json();
      const res3 = await fetch(url3, {
        "method": "GET",
        "headers": headers
      })
      const n3 = await res3.json();
      const res4 = await fetch(url4, {
        "method": "GET",
        "headers": headers
      })
      const n4 = await res4.json();
      projectList = [...n1, ...n2, ...n3, ...n4];
    }
    else {
      const res1 = await fetch(url1)
      const n1 = await res1.json();
      const res2 = await fetch(url2)
      let n2 = await res2.json();
      const res3 = await fetch(url3)
      const n3 = await res3.json();
      const res4 = await fetch(url4)
      const n4 = await res4.json();
      projectList = [...n1, ...n2, ...n3, ...n4];
    }
    // console.log(projectList);    
  } catch {
    console.log("Token not found");
  }
  

  projectList.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : ((b.stargazers_count < a.stargazers_count) ? -1 : 0));
  projectList = projectList.filter((e) => e.fork == false)
  return {
    props: {
      projectList,
    },
  }
}