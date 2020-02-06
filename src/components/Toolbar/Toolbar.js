import React from 'react'
import '../../Styles/Toolbar/Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div className='toolbar__toggle-button'>
                <DrawerToggleButton  click={props.drawerClickHandler} />
            </div>
            <div className='toolbar__logo'><a href='/'>My Logo</a></div>
            <div className='spacer' />
            <div className='toolbar__navigation-items'>
                <ul>
                    <li><a href='/'>projects</a></li>
                    <li><a href=''>experience</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;