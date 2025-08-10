import React from 'react'
import styles from "./Location.module.css"
import bg from '../../images/LocationBakground.webp';
import gym from '../../images/Gym.webp.webp'
import boxing from '../../images/boxing.webp'
import studio from '../../images/studio.webp'
import pilates from '../../images/Pilates.webp'
import pool from '../../images/swimming-pools.webp'
import spa from '../../images/Spa_area.webp'
import kidsClub from '../../images/kids_club.webp'
import pingPong from '../../images/Ping_pong.webp'
import ZoneCard from './zone/ZoneCard';


const zones = [
    { title: 'Тренажерний зал', image: gym },
    { title: 'Зона боксу', image: boxing },
    { title: 'Студії групових та персональних програм', image: studio },
    { title: 'Пілатес на реформерах', image: pilates },
    { title: 'Аквазона: великий та малий  басейн', image: pool },
    { title: 'Зона спа', image: spa },
    { title: 'Дитячий клуб', image: kidsClub },
    { title: 'Настільний теніс', image: pingPong },
];

const Location = () => {
    return (
        <section className={styles.container} style={{ backgroundImage: `url(${bg})`, }}>
            <h2 className={styles.heading} >Локації  </h2>
            <div className={styles.grid}>
{
    zones.map((zone,index)=>(<ZoneCard key={index} title={zone.title} image={zone.image}/>))
}
            </div>
        </section>
    )
}

export default Location