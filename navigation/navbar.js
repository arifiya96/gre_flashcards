import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './signedin'

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/dashboard' className="brand-logo">GRE Flashcards</Link>
                <SignedIn></SignedIn>
            </div>
        </nav>
    )
}

export default NavBar;