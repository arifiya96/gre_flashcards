import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedIn = () => {
    return (
        <ul className="right">
            <li><NavLink to='/word_list'>Word List</NavLink></li>
            <li><NavLink to='/add_word'>Add New Word</NavLink></li>
        </ul>
    )
}

export default SignedIn;