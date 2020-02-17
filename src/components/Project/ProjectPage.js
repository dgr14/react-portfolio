import React from 'react'
import '../../Styles/Project/ProjectPage.css'

import Project from './Project'

const ProjectPage = () => {
    return(
        <div className='project-page'>
            <div className='project-spacer'/>
            <div className='project-title'>
                <h1>My Projects</h1>
            </div>

            <ul className='project-list'>
            {/* <p>Below are some projects I have been a part of or built individually</p> */}
                <li><Project title='CHCK' description='A bill splitting application' /></li>
                <li><Project title='Employee Tracker' description='An app that keeps track of employees and their data'/></li>
                <li><Project title='Premier League App' description='Displays soccer data with axios calls to a 3rd party api'/></li>

            </ul>



            {/* <Project /> */}

        </div>
    )
}

export default ProjectPage