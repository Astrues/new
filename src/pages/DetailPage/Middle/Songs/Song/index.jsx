import React from 'react'
import { getAuthorName, getMusicTime, getSerial } from '../../../../../Library/myFunc';
import styles from './index.module.css'
export default function Song(props) {
    const { data, i } = props
    return (
        <tr className={styles.Song}>
            <th className={styles.Serial}>{getSerial(i + 1)}</th>
            <th className={styles.Name}>{data.name}</th>
            <th className={styles.Author}>{getAuthorName(data.ar)}</th>
            <th className={styles.Album}>{data.al.name ? data.al.name : '未知专辑'}</th>
            <th className={styles.Time}>{getMusicTime(data.dt)}</th>
        </tr>
    )
}
