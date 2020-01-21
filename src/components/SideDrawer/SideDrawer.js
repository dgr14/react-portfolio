import React from 'react'
import './SideDrawer.css'

const sideDrawer = props => (
    <nav className='side-drawer'>
        <ul>
            <li><a href='/'>projects</a></li>
            <li><a href='/'>experience</a></li>
        </ul>
    </nav>
)

export default sideDrawer