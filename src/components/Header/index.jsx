import React, { useState } from 'react'
import style from './index.module.css'
import logo from '../../asset/logo.png'
import Search from './Search'
import User from './User'
import Login from './Login'
import { Link } from 'react-router-dom'
export default function Header() {
    const [isShowLogin, setIsShowLogin] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    return (
        <header className={style.Header}>
            {/* logo图标 */}
            <Link to={'/'}>
                <img src={logo} alt="" style={{ width: "200px" }} />
            </Link>
            <Search />
            <User
                isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin}
                isLogin={isLogin} setIsLogin={setIsLogin}
            />
            {isShowLogin && <Login
                isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin}
                isLogin={isLogin} setIsLogin={setIsLogin}
            />}
        </header>
    )
}
