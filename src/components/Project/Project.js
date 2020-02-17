import React from 'react'
import '../../Styles/Project/Project.css'
import ProjectExpanded from './ProjectExpanded.js'

// showProjectView = () => {
//     this.props.history.push('/ProjectView')
// }


const Project = props => {
    const {title, description} = props
    return(
        <div className='project-view'>
            <div onClick={() => <ProjectExpanded />} className='project-container'>
                {/* <img src={image} /> */}
                <h2>{title}</h2>
                <ul className='project-list'>
                    <li><p>{description}</p></li>
                </ul>
                
            </div>
        </div>
        
    )
}

export default Project