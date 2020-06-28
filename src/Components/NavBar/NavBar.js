import React from 'react'
import logo from '../../logo.svg'
import "./navbar.scss"

export default function NavBar() {
    return (
        <nav className='NavBar'>
        <img src={logo} alt="CityTours"/>
        <ul className="nav-links">
            <li>
                <a href="" className="nav-link">
                    home

                </a>
            </li>
            <li>
                <a href="" className="nav-link">
                    about

                </a>
            </li>
            <li>
                <a href="" className="nav-link active">
                    tours

                </a>
            </li>
        </ul>

        </nav>
    )
}
