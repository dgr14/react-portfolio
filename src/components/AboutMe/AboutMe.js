import React from 'react'
import '../../Styles/AboutMe/AboutMe.css'

import Spacer from '../Spacer/Spacer'

// import LoadingPage from '../LoadingPage/LoadingPage.js'

const AboutMe = () => {
    return(
        <div className='about-me'>
            <Spacer />
            <div className='about-me__content'>
                <h1>About Me</h1>
                <p> - Born in Santa Barbara, raised in New York City</p>
            </div>
        </div>
    )
}

export default AboutMe