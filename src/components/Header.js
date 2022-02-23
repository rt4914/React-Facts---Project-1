// import React from 'react'
import logo from '../logo.svg'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="header-react">
                <img className="app-logo" src={logo} alt="logo" />
                <h1 className="react-text">ReactFacts</h1>
            </div>
            <p className="header-project-name">React Course Project 1</p>
        </header>
    )
}
