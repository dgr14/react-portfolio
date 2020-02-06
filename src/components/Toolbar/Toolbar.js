import React from 'react'
import '../../Styles/Toolbar/Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div className='toolbar__toggle-button'>
                <DrawerToggleButton  click={props.drawerClickHandler} />
            </div>
            <div className='toolbar__logo'><a className='name-title' href='/'>Darius Raazi</a></div>
            <div className='spacer' />
            <div className='toolbar__navigation-items'>
                <ul>
                    <li><a className='nav-li projects' href='/'>Projects</a></li>
                    <li><a className='nav-li experience' href='/'>Experience</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;