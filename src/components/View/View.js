import React from 'react'
import '../../Styles/View/View.css'

import Project from '../Project/Project.js'

const View = () => {
    return(
        <div className='view'>
            <div className='view-spacer'/>
            <Project title='CHCK' description='' image='' />
            <Project title='' description='' image='' />
        </div>
    )
}

export default View