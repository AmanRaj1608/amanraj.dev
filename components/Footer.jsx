import Link from 'next/link'
import { useRouter } from "next/router";

export default function Layout() {
  const router = useRouter();
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <a href="/thanks" >
          <div className="bottom">
            <span className="thanks">Thanks!</span>
            <span>  ❤️</span>
          </div>
        </a>
      </div>
      <div className="footer__links">
        <a href="mailto:archanaamanraj@gmail.com" target="_blank" rel="noopener noreferrer" title="email">
          <span className="text">email</span>
          <img src="/img/social/email.svg" alt="email" />
        </a>
        <a href="https://twitter.com/amanraj1608" target="_blank" rel="noopener noreferrer" title="twitter">
          <span className="text">twitter</span> <img src="/img/social/twitter.svg" alt="twitter" />
        </a>
        <a href="https://github.com/amanraj1608" target="_blank" rel="noopener noreferrer" title="github">
          <span className="text">github</span>
          <img src="/img/social/github.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/amanraj1608" rel="noopener noreferrer" target="_blank" title="linkedin">
          <span className="text">linkedin</span>
          <img src="/img/social/linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </footer>
  )
}