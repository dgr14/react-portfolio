import React from 'react'
import '../../Styles/SideDrawer/SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return(
        <nav className={drawerClasses}>
            <div className='drawer-header'>
                
            </div>
            <ul className='drawer-body'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About Me</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/skills'>Skills</a></li>
                <li><a href='/contact'>Contact Me</a></li>
            </ul>
            <div className='drawer-footer'>

            </div>
        </nav>
    )
}

export default sideDrawer