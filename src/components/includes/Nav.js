import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav-container">
        <h1>Logo</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
