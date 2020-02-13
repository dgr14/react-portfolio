import React, { Suspense } from 'react'
import {withRouter} from 'react-router-dom'

import LoadingPage from '../LoadingPage/LoadingPage.js'

const ExperienceView = () => {
    return(
        <Suspense fallback={ <LoadingPage /> }>
            <div className='experience-page'>

            </div>
        </Suspense>
    )
}

export default withRouter(ExperienceView)