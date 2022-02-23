import React from 'react'
import './MainContent.css'
import logo from '../logo.svg'

export default function MainContent() {
    return(
        <div className="root-main-content">
            <img id="logo" src={logo}/>
            <div className="main-text">
                <h1 className="react-facts-text">Fun facts about React</h1>
                <ul className="fact-item-list">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}
