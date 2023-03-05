import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Layout() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" className="nav__name">
        <Image
          src="/icons/logo.jpg"
          alt="logo"
          className="logo"
          width="25"
          height="25"
        />
        aman
      </Link>
      <ul>
        <li>
          <Link
            href="/"
            className={router.pathname == "/" ? "nav__link--active" : ""}
          >
            HOME
          </Link>
        </li>

        <li>
          <Link
            href="/projects"
            className={
              router.pathname == "/projects" ? "nav__link--active" : ""
            }
          >
            PROJECTS
          </Link>
        </li>

        {/* <li>
          <Link
            href="/about"
            className={router.pathname == "/about" ? "nav__link--active" : ""}
          >
            ABOUT
          </Link>
        </li> */}

        <li>
          <Link href="https://blog.amanraj.dev/">BLOG</Link>
        </li>

        {/* <li>
          <Link
            href="/uses"
            className={router.pathname == "/uses" ? "nav__link--active" : ""}
          >
            USES
          </Link>
        </li> */}

        <li>
          <Link
            href="/contact"
            className={router.pathname == "/uses" ? "nav__link--active" : ""}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
