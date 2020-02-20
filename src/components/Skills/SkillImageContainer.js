import React from 'react'
import '../../Styles/Skills/SkillImageContainer.css'

// IMAGE IMPORTS
// Languages
// import JavaScript from '../../skill-images/JavaScript.svg';
// import HTML5 from '../../skill-images/HTML5.svg';
// import CSS3 from '../../skill-images/CSS3.svg'
// Framewoks
// import ReactjsIcon from '../../skill-images/ReactjsIcon.svg'
// Need to find an image for express

// Devicon
import DevIcon from 'devicon-react-svg'

const deviconStyle = {
    // :hover: "#f1fcf7",
    fill: "#bbf3da",
    width: "150px"
}


const SkillImageContainer = () => {
    return(
        <div className='image-container'>
            {/* <img className='devicon-amazonwebservices-original'></img>
            <img src={JavaScript}/>
            <img src={HTML5} />
            <img src={CSS3} />
            <img src={ReactjsIcon}/> */}
            {/* Need to find an image for express */}

            {/* Devicon */}
            <DevIcon icon='javascript' style={deviconStyle} />
            <DevIcon icon='html5' style={deviconStyle} />
            <DevIcon icon='css3' style={deviconStyle} />

            <DevIcon icon='sass' style={deviconStyle} />
            <DevIcon icon='react' style={deviconStyle} />
            {/* <DevIcon icon='express' style={deviconStyle} /> */}
            {/* <DevIcon icon='mongoose' style={deviconStyle} /> */}

            <DevIcon icon='mongodb' style={deviconStyle} />

            <DevIcon icon='nodejs_small' style={deviconStyle} />
            <DevIcon icon='git' style={deviconStyle} />
            <DevIcon icon='github' style={deviconStyle} />
            <DevIcon icon='npm' style={deviconStyle} />


        </div>
    )
}

export default SkillImageContainer