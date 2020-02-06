import React from 'react'
import '../../Styles/Project/Project.css'
import { render } from '@testing-library/react'

const Project = props => {
    const {title, description, image} = props
    return(
        <div className='project-container'>
            <img src={image} />
            <h4>{title}</h4>
            <ul className='project-list'>
                <li><p>A bill splitting application</p></li>
            </ul>
            
        </div>
    )
}

export default Project