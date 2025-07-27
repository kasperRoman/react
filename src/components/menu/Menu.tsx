import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div><ul className={styles.menu}>
            <li>
                <Link to ='/'>Home</Link>
            </li>
            <li>
                <Link to ='page1'>Page1</Link>
            </li>
            <li>
                <Link to ='page2'>Page2</Link>
            </li>
        </ul>
        </div>
  )
}

export default Menu