import React from 'react'
import '../../Styles/SideDrawer/SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return(
        <nav className={drawerClasses}>
            <ul className='drawer-body'>
                <li><a href='/'>projects</a></li>
                <li><a href='/'>experience</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer