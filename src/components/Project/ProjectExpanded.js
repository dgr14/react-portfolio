import React from 'react'
import {useParams} from 'react-router-dom'
import '../../Styles/Project/ProjectExpanded.css'

import projects from './projects.json'

const ProjectExpanded = props => {
    // console.log(projects)
    const expandedProject = useParams().project
    const project = projects.filter(project => expandedProject === project.name)[0]

    return(
        <div className='project-expanded'>
            {/* <img /> */}
            <h1>{project.name}</h1>
            <div className='des-holder'>
                <p>{project.description}</p>
            </div>
        </div>
    )
}
 export default ProjectExpanded