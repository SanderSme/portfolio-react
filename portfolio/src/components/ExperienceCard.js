import "../css/ExperienceCard.css"


const ExperienceCard = ({image, altText, language, time}) => {
  return (
            <div className="card">
                <img src={image} alt={altText} className="languageLogo"/>
                <div>
                  <p className="language">{language}</p>
                  <p className="experience">Experience: {time}</p>
                </div>
            </div>
  )
}

export default ExperienceCard