import React from 'react'
import '../../Styles/Skills/SkillPage.css'

import Spacer from '../Spacer/Spacer.js'
import SkillImageContainer from './SkillImageContainer'



const SkillPage = () => {
    return(
        <div className='skill-page'>
            <Spacer />
            <div className='skill-container'>
                {/* EXPERIENCE */}
                <div className='exp'>
                    <div className='title-holder'>
                        <h1>Experience</h1>
                    </div>

                    <ul className='experience list'>

                        {/* new lh creates a new grouping for projects */}
                        {/* I should make the lh's links to the projects expanded view */}

                        <lh>CHCK, Front-End Developer</lh>
                        <div className='experience items'>
                            <li><p>A bill-splitting application integrated with restaurant POS</p></li>
                            <li><p>In charge of Style changes/additions</p></li>
                            <li><p>Managing the entire frontend GitHub repository with <br />daily commits & pull requests from multiple developers</p></li>
                            {/* <li><p></p></li> */}
                        </div>
                        
                        <lh>Employee Manager, Personal Project</lh>
                        <li><p>Maintains employee information that needs to be <br /> commonly accessed by both fellow employees and the management staff</p></li>
                    </ul>
                </div>

                {/* PROGRAMMING SKILLS */}
                <div className='programming'>
                    <div className='title-holder'>
                        <h1>Programming</h1>
                    </div>
                    <div className='programming-flex'>
                        <div className='text-container'>
                            <ul className='language list'>
                                <lh>Languages</lh>
                                <div className='skill items'>
                                    <li><p>JavaScript</p></li>
                                    <li><p>HTML5</p></li>
                                    <li><p>CSS3/SASS</p></li>
                                </div>
                            </ul>

                            <ul className='framework list'>
                                <lh>Frameworks</lh>
                                <div className='framework items'>
                                    <li><p>React</p></li>
                                    <li><p>Express</p></li>
                                    <li><p>Mongoose</p></li>
                                </div>
                                {/* <div className='line-gradient'/> */}
                            </ul>

                            <ul className='database list'>
                                <lh>Databases</lh>
                                <div className='database items'>
                                    <li><p>MongoDB</p></li>

                                </div>
                            </ul>

                            <ul className='tools list'>
                                <lh>Tools</lh>
                                <div className='tools items'>
                                    <li><p>Node.js</p></li>
                                    <li><p>Github</p></li>
                                </div>
                            </ul>
                        </div>
                        <div className='skill-image-container'>
                            <SkillImageContainer />
                        </div>
                    </div>
                </div>

                {/* EDUCATION */}
                <div className='edu'>
                    <div className='title-holder'>
                        <h1>Education</h1>
                    </div>

                    <ul className='education list'>
                        <lh><a href='https://www.vschool.io' target='_blank' rel="noopener noreferrer">V School</a></lh>
                        <div className='vschool items'>
                            <li><p>Completed the 12 week full-stack web development program - 2018/2019</p></li> 
                        </div>
                    </ul>
                </div>
                {/* NON-TECH WORK EXPERIENCE */}
                <div className='non-tech'>
                    <div className='title-holder'>
                        <h1>Non-Tech Work Experience</h1>
                    </div>

                    <ul className='non-tech list'>
                        <lh>Starbucks, Barista</lh>
                        <div className='starbucks items'>
                            <li><p>Salt Lake City, UT</p></li>
                            {/* <li><p></p></li> */}
                        </div>

                        <lh>Best Buy, Computer Salesperson</lh>
                        <div className='bestbuy items'>
                            <li><p>Salt Lake City, UT</p></li>
                            {/* <li><p></p></li> */}
                        </div>

                        <lh>Gosnell Tree & Landscape, Office Manager</lh>
                        <div className='gtl items'>
                            <li><p>Santa Barbara, CA</p></li>
                        </div>

                        <lh>Emporio Armani, Salesperson</lh>
                        <div className='emporio items'>
                            <li><p>New York, NY</p></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SkillPage