import React from 'react'
import Item from './Item';
import styles from './index.module.css'
export default function Official(props) {
    const { off } = props
    return (
        <div className={styles.Official}>
            <h2 className={styles.Title}>官方榜</h2>
            {off.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}
