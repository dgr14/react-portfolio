import React, { Suspense } from 'react'
import '../../Styles/AboutMe/AboutMe.css'

import LoadingPage from '../LoadingPage/LoadingPage.js'

const AboutMe = () => {
    return(
        <Suspense fallback={ <LoadingPage /> }>
            <div className='about-me'>
            <h1>About Me</h1>
            <p>An Avid Liverpool fan, born </p>
            </div>
        </Suspense>
    )
}

export default AboutMe