import './index.scss'
// import LogoM from '../../assets/images/logo-M.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTelegram,
  faInstagram,
  faReadme,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <svg 
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="60px"
          height="60px"
          viewBox="0 0 200.000000 200.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g className="logo_hover"
            transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="#022C43"
            stroke="none"
          >
            <path
              d="M530 1025 c0 -351 2 -394 15 -388 9 3 25 23 35 44 11 21 45 63 75 94
l54 56 3 117 3 117 40 -67 c22 -37 43 -68 46 -68 5 0 24 19 87 87 12 13 21 27
19 31 -2 4 -52 89 -112 190 l-108 182 -78 0 -79 0 0 -395z"
            />
            <path
              d="M1280 1365 c-17 -30 -29 -61 -27 -68 4 -9 6 -8 6 1 1 8 15 28 31 45
17 18 40 42 52 55 l21 22 -26 0 c-21 0 -32 -11 -57 -55z"
            />
            <path
              d="M1460 1398 c0 -7 -16 -33 -35 -57 -19 -24 -35 -47 -35 -51 0 -3 -78
-77 -174 -164 -96 -87 -182 -173 -192 -192 -16 -30 -20 -32 -35 -18 -14 12
-18 13 -28 0 -6 -8 -10 -20 -9 -27 2 -8 -3 -13 -10 -11 -8 1 -11 -1 -8 -6 3
-5 -8 -22 -24 -37 -17 -16 -30 -32 -30 -37 0 -4 17 -35 37 -68 37 -59 39 -60
83 -60 l45 1 120 202 120 202 3 -248 2 -247 90 0 90 0 0 415 c0 228 -2 415 -5
415 -3 0 -5 -6 -5 -12z"
            />
            <path
              d="M863 873 c-15 -5 -17 -23 -4 -23 5 0 11 7 15 15 3 8 4 15 3 14 -1 0
-8 -3 -14 -6z"
            />
            <path
              d="M673 718 c-13 -6 -24 -15 -24 -20 -1 -4 -2 -13 -3 -18 0 -6 -8 -15
-16 -20 -8 -5 -11 -10 -7 -10 4 0 -6 -13 -23 -30 -16 -16 -30 -32 -30 -35 0
-3 32 -5 70 -5 l70 0 0 35 c0 36 -15 46 -38 23 -23 -23 -13 10 13 40 38 46 33
62 -12 40z"
            />
          </g>
        </svg>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://drive.google.com/file/d/1U4w-sBGn8xF_w09l2WB-OaqLEc9obJ24/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faReadme} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/muhammadrizo-baxtiyorov/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mukhammadr1zo"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://t.me/baxtiyoroff_m" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mukhammadrizo_bakhtiyoroff/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
