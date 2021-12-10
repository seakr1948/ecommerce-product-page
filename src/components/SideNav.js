import React from 'react'

const SideNav = ({toggleVisible, visible}) => {
    return (
        
           
            <div className={`side-nav ${visible ?  "side-nav-open" : "side-nav-closed"}`}>
                <ul>
                    <li><button onClick={() => toggleVisible(false)}>&times;</button></li>
                    
                    <li><button>Collections</button></li>
                    <li><button>Men</button></li>
                    <li><button>Women</button></li>
                    <li><button>About</button></li>
                    <li><button>Contact</button></li>
                </ul>
            </div>
    )
}

export default SideNav
