import React from 'react'
import styles from './index.module.css'
export default function Banner(props) {
    return (
        <li className={styles.Banner}>
            <img
                className={styles.Img}
                src={props.data.imageUrl} alt="" />
        </li>
    )
}
