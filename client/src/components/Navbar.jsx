import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-dark container">
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/create">Create Note</Link>
        </nav>
    )
}

export default Navbar
