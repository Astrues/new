import React from 'react'
import CommonList from './CommonList'
import UserList from './UserList'
import styles from './index.module.css'
export default function List() {
    return (
        <div className={styles.List}>
            <CommonList />
            <UserList />
        </div >
    )
}
