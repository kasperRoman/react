import React from 'react'
import styles from '../Location.module.css'

const ZoneCard = ({title,image}) => {
  return (
        <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}>
        <h3 className={styles.cardTitle}>{title} </h3>
      </div>
    </div>
  )
}

export default ZoneCard