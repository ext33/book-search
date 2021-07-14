import React from 'react'
import styles from './index.module.sass'

function Card(props) {
    return (
        <a href={`/books/${props.id}`} className={styles.card}>
            <img src={props.image} alt={props.title} />
            <div>
                <p className={styles.category}>{props.category}</p>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.authors}>{props.authors}</p>
            </div>
        </a>
    )
}

export default Card
