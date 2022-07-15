import React from 'react'
import Creator from './Creator';
import styles from './index.module.css'
import Buttons from './Buttons'
import Detail from './Detail';
export default function Top(props) {
    const { data } = props
    return (
        <div className={styles.Top}>
            <img
                className={styles.Img}
                src={data.playlist.coverImgUrl} alt="" />
            <div className={styles.Container}>
                <div className={styles.Title}>{data.playlist.name}</div>
                <Creator data={data} />
                <Buttons data={data} />
                <Detail data={data} />
            </div>
        </div>
    )
}
