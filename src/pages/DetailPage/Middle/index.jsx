import React from 'react'
import TopNavLink from '../../../components/TopRecom/TopNavLink'
import styles from './index.module.css'
export default function Middle(props) {
    const { data } = props
    return (
        <div className={styles.Middle}>
            <li>
                <TopNavLink to={'songlist'}>歌曲列表</TopNavLink>
            </li>
            <li>
                <TopNavLink to={'comment'}>评论({data.playlist.commentCount})</TopNavLink>
            </li>
            <li>
                <TopNavLink to={'collect'}>收藏者</TopNavLink>
            </li>
        </div>
    )
}