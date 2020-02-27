import React  from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import '../../Styles/Project/ProjectPage.css'

// import Project from './Project'
import Spacer from '../Spacer/Spacer'
import ProjectExpanded from './ProjectExpanded'
import projects from './projects.json'

const ProjectPage = () => {

    const projectsMapped = projects.map(project => <Link key={project.name} to={`/projects/${project.name}`}><h1>{project.name}</h1></Link>)

    return(
        <div className='project-page'>
            <Spacer />
            <div className='project-title'>
                <h1>My Projects</h1>
            </div>

            <ul className='project-list'>
            {/* <p>Below are some projects I have been a part of or built individually</p> */}
                <div className='project-container'>
                {/* Here is where the list of projects is displayed */}
                    
                    {projectsMapped}

                    {/* <Link to='/projects/chck'><Project title='CHCK' description='A bill splitting application' /></Link>
                    <li><Project title='Employee Tracker' description='An app that keeps track of employees and their data'/></li>
                    <li><Project title='Premier League App' description='Displays soccer data with axios calls to a 3rd party api'/></li> */}
                </div>

                <div className='expanded-view'>
                {/* I want to display the project data here because theres more space */}
                {/* Is this where I would put my switch and routes? */}

                    <Switch>
                        {/* I have to set up my expanded project page routes */}
                        <Route path='/projects/:project' component={ProjectExpanded} />
                    </Switch>

                </div>
            </ul>
        </div>
    )
}

export default ProjectPage