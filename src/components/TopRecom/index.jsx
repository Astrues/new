import React from 'react'
import styles from './index.module.css'
import TopNavLink from './TopNavLink'
export default function TopRecom(props) {
    return (
        <div className={styles.TopRecom}>
            <li>
                <TopNavLink to={`recommend`}>个性推荐</TopNavLink>
            </li>
            <li>
                <TopNavLink to={`order`}>专属定制</TopNavLink>
            </li>
            <li>
                <TopNavLink to={`songlist`}>歌单</TopNavLink>
            </li>
            <li>
                <TopNavLink to={`rank`}>排行榜</TopNavLink>
            </li>
            <li>
                <TopNavLink to={`singer`}>歌手</TopNavLink>
            </li>
            <li>
                <TopNavLink to={`newsongs`}>最新音乐</TopNavLink>
            </li>
        </div>
    )
}