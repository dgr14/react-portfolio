import React, { Suspense } from 'react'
import '../../Styles/Project/Project.css'
import ProjectView from './ProjectExpanded.js'

import LoadingPage from '../LoadingPage/LoadingPage.js'

// showProjectView = () => {
//     this.props.history.push('/ProjectView')
// }


const Project = props => {
    const {title, description, image} = props
    return(
        <Suspense fallback={ <LoadingPage /> }>
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
        </Suspense>
    )
}

export default Project