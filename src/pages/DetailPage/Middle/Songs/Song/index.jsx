import React from 'react'
import { getAuthorName, getMusicTime, getSerial } from '../../../../../Library/myFunc';
import styles from './index.module.css'
export default function Song(props) {
    const { data, i } = props
    console.log(data, i);
    return (
        <div className={styles.Song}>
            <div className={styles.Serial}>{getSerial(i + 1)}</div>
            <div className={styles.Name}>{data.name}</div>
            <div className={styles.Author}>{getAuthorName(data.ar)}</div>
            <div className={styles.Album}>{data.al.name ? data.al.name : '未知专辑'}</div>
            <div>{getMusicTime(data.dt)}</div>
        </div>
    )
}
