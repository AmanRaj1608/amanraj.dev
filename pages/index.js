import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Aman Raj · AmanRaj1608</title>
      </Head>
      <Navbar />
      <main>
        <div className="heading">
          <div className="left_sec">
            <img
              src="/aman.jpg"
              alt="Aman"
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
              <span id="blue_text">Student / SDE → Otaku</span>
            </h2>
            <br />
            <h4 className="description" id="tracks">
              Hi there! I am Aman a third-year Computer Science undergraduate @ <a className="hover_eff"
                target="blank" href="http://iiitvadodara.ac.in/">IIIT Vadodara</a>, India.
            </h4>
            <br />
            <h4 className="description" id="tracks">
              At the moment, I'm intern at <a
                className="hover_eff" target="blank" href="http://hapramp.com/">Hapramp</a>, working on project <a
                className="hover_eff"
                target="blank" href="http://getgosocial.app/">GoSocial</a>.
            </h4>
          </div>
        </div>
        {/*<hr className="break" />
        <div>
          Recent Projects...
        </div>
        <hr className="break" />
        <div>
          Recent Blogs...
        </div>*/}
      </main>
    </>
  )
}
