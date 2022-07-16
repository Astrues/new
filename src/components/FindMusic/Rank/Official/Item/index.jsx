import React from 'react'
import styles from './index.module.css'
export default function Item(props) {
    const { item } = props
    return (
        <div className={styles.Item}>
            <img
                className={styles.Img}
                src={item.coverImgUrl} alt="" />
            <ul className={styles.Top}>
                {item.tracks.map((item, index) => <li key={`jjj${index}`}>
                    <span>{index + 1}</span>
                    <span>{item.first}</span>
                    <span>{item.second}</span>
                </li>)}
            </ul>
        </div>
    )
}
