import React from 'react'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useStore } from 'react-redux'
import { useGetUserInfomQuery } from '../../../store/api/userApi'
export default function User(props) {
    const { setIsShowLogin } = props
    const { isLogin } = props
    const { userId } = useStore().getState().user;
    const { data: detail } = useGetUserInfomQuery(userId)
    const clickUserHandler = () => {
        if (isLogin) {

        } else {
            setIsShowLogin(prevState => !prevState)
        }
    }
    return (
        <>
            <div
                onClick={clickUserHandler}
                className={styles.User}>
                <div className={styles.UserContainer}>
                    {!isLogin ?
                        <FontAwesomeIcon icon={faUser} className={styles.UserIcon} /> :
                        <img
                            className={styles.Img}
                            src={detail.profile.avatarUrl}
                            alt="" />}
                </div>
                <span className={styles.State}>
                    {!isLogin ?
                        '未登录' :
                        detail.profile.nickname
                    }
                </span>
            </div>
        </>
    )
}