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
                <Link to ='Movies'>Movies</Link>
            </li>
            <li>
                <Link to ='TvSeries'>TV Series</Link>
            </li>
        </ul>
        </div>
  )
}

export default Menu