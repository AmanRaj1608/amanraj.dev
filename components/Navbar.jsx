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
            alt="logo"
            className="logo"
            width="20px"
            height="20px"
          />
          @amanraj1608
        </a>
      </Link>
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
          <Link href="/about">
            <a className={router.pathname == "/about" ? "nav__link--active" : ""} href="/about">About</a>
          </Link>
        </li>

        <li>
          <Link href="https://blog.amanraj.dev/">
            <a href="https://blog.amanraj.dev/">Blog</a>
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