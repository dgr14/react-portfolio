import React from 'react'
import { Element } from 'react-scroll'
import '../../Styles/AboutMe/AboutMe.css'

import Spacer from '../Spacer/Spacer'

// import LoadingPage from '../LoadingPage/LoadingPage.js'

const AboutMe = () => {
    return(
        <Element name='about-me'>
        <div className='about-me' >
            <Spacer />
            <div className='about-me__content'>
                <h1>About Me</h1>
                <p> - Born in Santa Barbara, raised in New York City</p>
            </div>
        </div>
        </Element>
    )
}

export default AboutMe