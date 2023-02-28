import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import netlifyLogo from '../assets/netlify.svg'

import '../css/MyWork.css'


const WorkCards = ({img, altText, heading, info, netlify, github}) => {
  return (
    <div className='cardContainer'>
        <img src={img} alt={altText} className='workImg'/>
        <h1 className='workHeading'>{heading}</h1>
        <p className='workInfo'>{info}</p>
        <div className='linksContainer'>
            <a href={netlify} className='Links'><img src={netlifyLogo} className='netlifyLogo'/> Visit site</a>
            <a href={github} className='Links'><FontAwesomeIcon icon={faGithub} size="2x" /> View code</a>
        </div>
    </div>
  )
}

export default WorkCards