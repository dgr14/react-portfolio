import React from 'react'
import '../../Styles/Footer/Footer.css'
import { SocialMediaIconsReact } from 'social-media-icons-react'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='devicon'>
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(187,243,218,1)" iconSize="6.5" roundness="25%" url="https://github.com/dgr14" size="40" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(187,243,218,1)" iconSize="6.5" roundness="25%" url="https://www.linkedin.com/in/dariusraazi/" size="40" />
            </div>

            <div className='resume-container'>
                <a>My Resume</a>
            </div>
        </div>
    )
}

export default Footer