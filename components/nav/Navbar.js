import React from 'react'
import NavStyles from './Nav.Styles'

function Navbar() {



    return (
        <NavStyles>
            <div>
                <nav className="menu-container">
                    {/* burger menu  */}
                    <input type="checkbox" aria-label="Toggle menu" />
                    <span></span>
                    <span></span>
                    <span></span>

                    {/* logo  */}
                    <h1>PARADOCX</h1>

                    {/* menu items */}
                    <div class="menu">
                        <ul>
                            <li>
                                <a href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#docs">
                                    Projects
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#aboutme">
                                    About me
                                </a>
                            </li>
                            <li>
                                <a href="#contactme">
                                    Contact me
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </NavStyles>
    )
}

export default Navbar