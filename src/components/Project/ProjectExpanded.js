import React from 'react'
import '../../Styles/Project/ProjectExpanded.css'

const projects = {
    "chck" : {
        title: "CHCK",
        description: "A bill splitting application"
    },
    "employeetracker" : {
        title: "Employee Tracker",
        description: "An app that keeps track of employees and their data"
    },
    "premierleagueapp" : {
        title: "Premier League App",
        description: "Displays soccer data with axios calls to a 3rd party api"
    }
}

const data = projects

const ProjectExpanded = props => {
    return(
        <div className='project-expanded'>
            <h1>data.title</h1>
        </div>
    )
}
 export default ProjectExpanded