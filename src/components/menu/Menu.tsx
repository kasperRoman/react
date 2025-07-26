import React from 'react'
import { Link } from 'react-router-dom'
import style from './Menu.module.css'

const Menu = () => {
  return (
    <div>
     <ul className={style.menu}>
        <li>
            <Link to='/' >Home</Link>
        </li>
        <li>
            <Link to='/products'>Products</Link>
        </li>
        <li>
            <Link to="/recipes">recipes</Link>
        </li>
     </ul>


    </div>
  )
}

export default Menu