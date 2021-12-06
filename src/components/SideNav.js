import React from 'react'

const SideNav = ({toggleVisible}) => {
    return (
        <div className="side-nav-overlay">
            <div className="side-nav">
                <ul>
                    <li><button onClick={() => toggleVisible(false)}>&times;</button></li>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        
    )
}

export default SideNav
