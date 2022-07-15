import React from 'react'
import MyNavLink from '../MyNavLink'
import styles from './index.module.css'
export default function CommonList() {
    return (
        <div>
            <ul className={styles.Top}>
                <li>
                    <MyNavLink to={'findmusic'}>发现音乐</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={'blogs'}>博客</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={'video'}>视频</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={'focus'}>关注</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={'live'}>直播</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={'private'}>私人FM</MyNavLink>
                </li>
            </ul>
        </div>
    )
}
