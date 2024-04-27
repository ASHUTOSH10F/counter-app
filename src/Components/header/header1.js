import React from 'react'
import { Link } from 'react-router-dom'
export default function header1() {
  return (
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='counter'>Counter</Link></li>
        <li><Link to='contact-us'>Contact</Link></li>
      </ul>
    </header>
  )
}
