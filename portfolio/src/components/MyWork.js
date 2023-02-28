import '../css/MyWork.css'
import { useState } from 'react';
import WorkCards from './WorkCards'
import auctiON from '../assets/auctiON.png'
import BoatDatLife from '../assets/Blog.png'
import Museum from '../assets/CSM.png'
import BeerHelper from '../assets/BeerHelper.png'
import GameHub from '../assets/GameHub.png'
import ConnectFour from '../assets/connect-four.png'

const MyWork = () => {
  const [showHiddenWorks, setShowHiddenWorks] = useState(false);

  const toggleHiddenWorks = () => {
    setShowHiddenWorks(!showHiddenWorks);
  }

  return (
    <div className="MyWork">
      <h1 className="MyWorkHeading">My work</h1>
      <div className='MyWorkContainer'>
        <WorkCards img={auctiON} altText="auctiON" heading="auctiON" info="Auction website built with Html, Tailwindcss and JavaScript, where you can create user, log in, view products, list items and bid on products. This was created for a school exam" netlify="#" github="#"/>
        <WorkCards img={BoatDatLife} altText="BoatDatLife" heading="BoatDatLife" info="Blog website built with html, css, JavaScript and Wordpress. Blogposts are filled with dummy-text, and can be filtered and search through" netlify="#" github="#"/>
        {showHiddenWorks && (
          <span id='HiddenWorks' className='MyWorkContainer'>
            <WorkCards img={Museum} altText="Museum" heading="Community Science Museum" info="Homepage for a fictive science museum called Community Science Museum. Built with Html and CSS, made for a school exam. Special features: Light-/Dark-mode" netlify="#" github="#"/>
            <WorkCards img={BeerHelper} altText="Beerhelper" heading="BeerHelper" info="First project created with API calls. This uses a beer api, whitch holds info about different kinds of beers" netlify="#" github="#"/>
            <WorkCards img={GameHub} altText="GameHub" heading="GameHub" info="First project created. Built with HTML and CSS. Homepage for a fictive gaming website, made for a school exam" netlify="#" github="#"/>
            <WorkCards img={ConnectFour} altText="ConnectFour" heading="Connect Four" info="Built with Html, Css and JavaScript. Made just for fun after our teacher told us he got a job-offer after he made a simelar game" netlify="#" github="#"/>
          </span>
        )}
      </div>
      <div className='btnContainer'>
      <button type='button' className='showMoreBtn' onClick={toggleHiddenWorks}>
        {showHiddenWorks ? 'Show less' : 'Show more'}
      </button>
      </div>
    </div>
  )
}


export default MyWork