import React from 'react'
import '../../Styles/Project/Project.css'
import ProjectView from './ProjectExpanded.js'

// showProjectView = () => {
//     this.props.history.push('/ProjectView')
// }


const Project = props => {
    const {title, description, image} = props
    return(
        <div className='project-view'>
            <div onClick={() => <ProjectView />} className='project-container'>
                {/* <img src={image} />
                <h2>{title}</h2>
                <ul className='project-list'>
                    <li><p>A bill splitting application</p></li>
                </ul> */}

                <h1>Project</h1>
                
            </div>
        </div>
    )
}

export default Project