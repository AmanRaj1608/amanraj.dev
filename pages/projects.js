import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Projects({ projectList }) {

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}


export async function getStaticProps() {
  let projectList = [];
  const res = await fetch('https://api.jsonbin.io/v3/b/5f8301fe302a837e95780c4d')
  projectList = await res.json();
  projectList = projectList.record;
  console.log(projectList.record);

  projectList.sort((a,b) => (a.stargazers_count < b.stargazers_count) ? 1 : ((b.stargazers_count < a.stargazers_count) ? -1 : 0));
  return {
    props: {
      projectList,
    },
  }
}