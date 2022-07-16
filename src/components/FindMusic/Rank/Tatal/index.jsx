import React from 'react'
import styles from './index.module.css'
import Item from './Item';
export default function Tatal(props) {
    const { tal } = props
    return (
        <div className={styles.Tal}>
            <h2 className={styles.title}>全球榜</h2>
            <div className={styles.Container}>
                {tal.map(item => <Item key={item.id} item={item} />)}
            </div>
        </div>
    )
}