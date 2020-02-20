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
            <div onClick={() => <ProjectExpanded />} className='project-onclick'>
                <ul className='project-list'>
                    <lh><h2>{title}</h2></lh>
                    <li><p>{description}</p></li>
                </ul>
                
            </div>
        </div>
        
    )
}

export default Project