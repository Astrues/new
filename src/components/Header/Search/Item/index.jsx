import React from 'react'
import styles from './index.module.css'
export default function Item(props) {
    const { data, index } = props
    console.log(data);
    return (
        <div className={styles.Item}>
            <span>{index + 1}</span>
            <span>
                <div>{data.searchWord}</div>
                {data.content && <div>{data.content}</div>}
            </span>
            <span>{data.score}</span>
        </div>
    )
}
