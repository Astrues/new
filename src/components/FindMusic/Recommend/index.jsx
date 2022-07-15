import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './index.module.css'
import RecomLists from './RecomLists'
import SlideShow from './SlideShow'
export default function Recommend() {
    return (
        <div className={styles.Recommend}>
            <SlideShow />
            <Link
                to={'/findmusic/songlist'}
                className={styles.Title1}>推荐歌单</Link>
            <RecomLists />
            <Link
                to={'/blogs'}
                className={styles.Title2}>热门播客</Link>
            <RecomLists />
            <Outlet />
        </div>
    )
}
