import React from 'react'
import { getNum } from '../../../../Library/myFunc'
import styles from './index.module.css'
export default function Buttons(props) {
    const { data } = props
    return (
        <div className={styles.Buttons}>
            <button className={styles.Bofang}>▶ 播放全部</button>
            <button className={styles.Jia}>+</button>
            <button className={styles.Shoucang}>🎬 收藏({getNum(data.playlist.subscribedCount)})</button>
            <button>💻 分享({getNum(data.playlist.shareCount)})</button>
            <button>🎥 下载全部</button>
        </div>
    )
}
