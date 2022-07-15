import React from 'react'
import styles from './index.module.css'
import MyNavLink from '../MyNavLink'
import { useState } from 'react'
export default function UserList() {
    const [showMyLike, setShowMyLike] = useState(false)
    return (
        <div className={styles.UserList}>
            <div className={styles.Title}>我的音乐</div>
            <ul className={styles.UserDec}>
                <li>
                    <MyNavLink to={'local'}>本地与下载</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={'recent'}>最近播放</MyNavLink>
                </li>
            </ul>
            <div onClick={() => setShowMyLike(prevState => !prevState)}
                className={styles.Detail}>
                <span>创建的歌单</span>
            </div>
            {
                showMyLike && <ul className={styles.MyLike}>
                    <li>
                        <MyNavLink to={'mylike'}>我喜欢的音乐</MyNavLink>
                    </li>
                </ul>
            }
        </div>
    )
}
