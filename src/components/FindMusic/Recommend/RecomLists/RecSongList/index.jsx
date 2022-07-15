import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { setSongList } from '../../../../../store/reducer/songSlice'
export default function RecSongList(props) {
    const { song } = props
    let num = song.playCount
    const newNum = (num) => {
        let a = num / 10000;
        if (a > 10000) {
            return `${parseInt(a / 10000)}亿`
        } else if (a > 1) {
            return `${parseInt(a)} 万`
        } else {
            return `${num}`
        }
    }
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(setSongList(song))
    }
    return (
        <Link
            onClick={clickHandler}
            to={`/findmusic/recommend/list/${song.id}`}
            className={styles.SongList}>
            <img
                className={styles.songUrl}
                src={song.picUrl} alt="" />
            <div className={styles.Title}>{song.name}</div>
            <span className={styles.num}>▶ {newNum(num)}</span>
            <span className={styles.Icon}>▶</span>
        </Link>
    )
}