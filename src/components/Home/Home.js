import React, { Suspense } from 'react'
import '../../Styles/Home/Home.css'
import LoadingPage from '../LoadingPage/LoadingPage.js'

// import Project from '../Project/Project.js'

const View = () => {
    return(
        <Suspense fallback={ <LoadingPage /> }>
            <div className='home-page'>
                <div className='home-spacer'/>
                <div className='home-content'>
                    <div className='landing-content'>
                        <img />

                    </div>
                    <ul className='main-home-info'>
                        <lh><h1>Web Developer</h1></lh>
                        <li><p>Currently living in Salt Lake City, UT</p></li>
                        <li><p> I develop mainly using the MERN Stack</p></li>
                        <li><p>Currently working on a mobile web application, CHCK</p></li>
                        <li><p></p></li>

                    </ul>
                </div>
                

                {/* <Project title='CHCK' description='' image='' />
                <Project title='' description='' image='' /> */}
            </div>
        </Suspense>
    )
}

export default View