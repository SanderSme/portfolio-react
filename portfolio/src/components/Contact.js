import '../css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className="Contact">
          <h2 className="ContactHeading">Contact</h2>
          <p className="ContactText">I am eagerly looking for opportunities to expand my skill set and take on new challenges, and I am always open to discussing new opportunities and learning about potential career paths.
            Please do not hesitate to reach out to me with any questions, comments, or suggestions. I am excited to connect with others in my field and explore new possibilities.</p>
            <div className="ContactInfoContainer">
              <div>
                <p className="MediaHeading">Find me on social media:</p>
                <div className="SocialMediaIconContainer">
                  <a href="#" className="SocialMediaIcon GitHub">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href="#" className="SocialMediaIcon FaceBook">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="#" className="SocialMediaIcon LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
              </div>
              <div>
                <p className="NediaHeading">Send me an E-mail:</p>
                <button type="button" className="EmailBtn">E-mail</button>
              </div>
            </div>
        </div>
  )
}

export default Contact