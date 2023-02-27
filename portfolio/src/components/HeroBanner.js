import ExperienceCard from "./ExperienceCard"
import "../css/HeroBanner.css"
import htmlLogo from "../assets/html-logo.png"
import cssLogo from "../assets/css-logo.png"
import jsLogo from "../assets/js-logo.png"
import tailwindLogo from "../assets/tailwind-logo.png"
import figmaLogo from "../assets/figma-logo.png"
import reactLogo from "../assets/react-logo.png"

const HeroBanner = () => {
  function test(year) {
    var myDate = new Date().getFullYear()
    if(myDate - year === 0) {
      return "Just started"
    } else if(myDate - year === 1) {
      return myDate - year + " year"
    } else {
    return myDate - year + " years"
  }
  }
  // function changeHeading() {
  //   let headingArray = ["hello", "hei", "eyyyyyy"]
  //   {headingArray.map(heading => {
  //     // setInterval(() => console.log(heading), 4000)
  //   })}
  // }
  return (
        <div className="HeroBanner">
          <div className="ProfileInfo">
            <h1 className="Greeting">Hello!</h1>
            <p className="GreetingText">My name is Sander Smedbøl, and I am a Front end developer stationed in Oslo, Norway</p>
            <div className="ExperienceCardContainer">
            <ExperienceCard image={htmlLogo} altText="html-logo" language="HTML" time={test(2021)}/>
            <ExperienceCard image={cssLogo} altText="css-logo" language="CSS" time={test(2021)}/>
            <ExperienceCard image={jsLogo} altText="js-logo" language="JavaScript" time={test(2021)}/>
            <ExperienceCard image={figmaLogo} altText="figma-logo" language="Figma" time={test(2021)}/>
            <ExperienceCard image={tailwindLogo} altText="tailwind-logo" language="Tailwind" time={test(2022)}/>
            <ExperienceCard image={reactLogo} altText="react-logo" language="React" time={test(2023)}/>
            </div>
          </div>
          <div className="ProfileImg"></div>
        </div>
  )
}

export default HeroBanner