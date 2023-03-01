import '../css/Header.css';
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <div className="header-container">
        <a href="#">
        <img src={logo} alt="logo" className="logo"/>
        </a>
        <input type="text" className="searchBar" placeholder="Search for project.."/>
        <div className="navLinks-container">
          <a href="https://github.com/SanderSme" className="navLinks">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="#" className="navLinks">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="navLinks">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <div>
            <button type="button" className="btnLeft"></button>
            <button type="button" className="btnRight"></button>
          </div>
        </div>
      </div>
  )
}

export default Header