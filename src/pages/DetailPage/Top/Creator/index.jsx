import React from 'react'
import { getData } from '../../../../Library/myFunc';
import styles from './index.module.css'
export default function Creator(props) {
    const { data } = props
    const time = getData(data.playlist.createTime)
    return (
        <div className={styles.User}>
            <img
                className={styles.UserImg}
                src={data.playlist.creator.avatarUrl} alt="" />
            <span className={styles.UserName}>{data.playlist.creator.nickname}</span>
            <span className={styles.CreateTime}>{time}创建</span>
        </div>
    )
}
