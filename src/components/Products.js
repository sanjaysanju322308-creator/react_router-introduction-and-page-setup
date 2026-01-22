import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
        <h1>Tourch</h1>
        <p>Only gaming tourch!</p>
        <Link to="tomail:example.com">example@gmail.com</Link>
        <h1>Hooks items</h1>
        <h1>Local items</h1>
    </div>
  )
}
