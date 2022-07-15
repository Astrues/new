import React, { useEffect } from 'react'
import { useState } from 'react'
import { getDec, getNum } from '../../../../Library/myFunc'
import styles from './index.module.css'
export default function Detail(props) {
    const { data } = props
    let dec = data.playlist.description
    const [isShowDec, setIsSHowDec] = useState(false)

    return (
        <div className={styles.Detail}>
            <div className={styles.Span}>
                标签 : <span>{data.playlist.tags[0]} </span>/
                <span> {data.playlist.tags[1]} </span>/
                <span> {data.playlist.tags[2]} </span>
            </div>
            <div className={styles.Song}>
                歌曲 : {data.playlist.trackCount} &nbsp; 播放 : {getNum(data.playlist.playCount)}
            </div>
            <div className={styles.Jianjie}>
                {
                    dec.length > 118 ?
                        dec.slice(0, 118) :
                        dec
                }
            </div>
        </div>
    )
}