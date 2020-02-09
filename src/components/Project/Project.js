import React from 'react'
import '../../Styles/Project/Project.css'
// import { render } from '@testing-library/react'
import ProjectView from './ProjectView.js'

// showProjectView = () => {
//     this.props.history.push('/ProjectView')
// }


const Project = props => {
    const {title, description, image} = props
    return(
        <div onClick={() => <ProjectView />} className='project-container'>
            <img src={image} />
            <h2>{title}</h2>
            <ul className='project-list'>
                <li><p>A bill splitting application</p></li>
            </ul>
            
        </div>
    )
}

export default Project