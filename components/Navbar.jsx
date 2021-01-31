import Link from 'next/link'
import { useRouter } from "next/router";

export default function Layout() {

  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className="nav__name" href="/">
          <img
            src="/icons/logo.jpg"
            alt="Aman's logo"
            className="logo"
          />
      Aman Raj <span>·</span> amanraj1608
    </a>
      </Link>
      { /* <div className="alwaysTop"></div> */}
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? "nav__link--active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className={router.pathname == "/projects" ? "nav__link--active" : ""} href="/projects">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="http://aman-ki-baat.vercel.app/">
            <a target="blank" href="http://aman-ki-baat.vercel.app/">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/uses">
            <a className={router.pathname == "/uses" ? "nav__link--active" : ""} href="/uses">Uses</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "nav__link--active" : ""} href="/contact">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}