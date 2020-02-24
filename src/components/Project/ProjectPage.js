import React  from 'react'
import {Link} from 'react-router-dom'
import '../../Styles/Project/ProjectPage.css'

import Project from './Project'
import Spacer from '../Spacer/Spacer'

const ProjectPage = () => {
    return(
        <div className='project-page'>
            <Spacer />
            <div className='project-title'>
                <h1>My Projects</h1>
            </div>

            <ul className='project-list'>
            {/* <p>Below are some projects I have been a part of or built individually</p> */}
                <div className='project-container'>
                    <Link to='/projectview/:project'><Project title='CHCK' description='A bill splitting application' /></Link>
                    <li><Project title='Employee Tracker' description='An app that keeps track of employees and their data'/></li>
                    <li><Project title='Premier League App' description='Displays soccer data with axios calls to a 3rd party api'/></li>
                </div>

                <div className='expanded-view'>
                        
                </div>
            </ul>
        </div>
    )
}

export default ProjectPage