import React from 'react'
import styles from './index.module.css'
export default function Item(props) {
    const { item } = props
    console.log(item);
    return (
        <div className={styles.Item}>
            <img
                className={styles.Img}
                src={item.coverImgUrl} alt="" />
            <div>{item.name}</div>
        </div>
    )
}
