import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ProductNav() {
  return (
    <>
      <div className='products'>
        <nav>
          <ul>
            <li>
              <NavLink to="all">all</NavLink>
            </li>
            <li>
              <NavLink to="Fashion">Fashion</NavLink>
            </li>
            <li>
              <NavLink to="electronics">Electronics</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}
