import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'


const Menu = () => {
  return (
    <div>
        <ul className={styles.menu}>
            <li>
                <Link to ='/'>Home</Link>
            </li>
            <li>
                <Link to ='/page1'>Page1</Link>
            </li>
            <li>
                <Link to ='/page2'>Page2</Link>
            </li>
        </ul>
        <hr />
    </div>
  )
}

export default Menu