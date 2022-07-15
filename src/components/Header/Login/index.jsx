import React from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { useLoginPhoneMutation } from '../../../store/api/userApi'
import styles from './index.module.css'
import { login } from '../../../reducer/userSlice'
export default function Login(props) {
    // 是否显示登录框的状态
    const { setIsShowLogin } = props
    // 是否登录
    const { isLogin, setIsLogin } = props
    // 引入登录的api
    const [loginFn] = useLoginPhoneMutation()
    // 获取派发器
    const dispatch = useDispatch();
    const userInp = useRef()
    const passInp = useRef()

    const loginHandler = () => {
        let username = userInp.current.value
        let password = passInp.current.value
        if (!isLogin) {
            loginFn({
                username,
                password
            }).then(res => {
                if (!res.error) {
                    dispatch(login({
                        token: res.data.token,
                        userId: res.data.account.id
                    }))
                    setIsShowLogin(false)
                    setIsLogin(true)
                }
            }).catch(error => {
                alert('账号或密码错误')
            })
        }
    }
    return (
        <div className={styles.Login}>
            <span
                onClick={() => setIsShowLogin(false)}
                className={styles.Clear}>❌</span>
            <div className={styles.Title}>简陋的登录窗口</div>
            <input ref={userInp} type="username" placeholder='请输入手机号' />
            <input ref={passInp} type="password" placeholder='请输入密码' />
            <button
                onClick={loginHandler}
                className={styles.Join}>登录</button>
            <NavLink className={styles.Register} to={'register'}>注册</NavLink>
        </div>
    )
}