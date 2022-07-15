import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: () => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem('userId');
        if (!token && !userId) {
            return {
                isLogged: false,
                token: null,
                userId: null,
                expirationTime: 0,// 登录状态失效时间
            }
        }
        return {
            isLogged: true,
            token,
            userId,
            expirationTime: +localStorage.getItem('expirationTime')
        }
    },
    reducers: {
        // 登录
        login(state, action) {
            state.isLogged = true;
            state.token = action.payload.token;
            state.userId = action.payload.userId
            console.log(action);
            // 获取当前时间戳
            const currentTime = Date.now()
            // 设置登录的有效时间
            const timeOut = 1000 * 60 * 60 * 24 * 7;// 一周
            // 设置失效时间
            state.expirationTime = currentTime + timeOut;
            // 将数据存储到本地储存中
            localStorage.setItem('token', state.token)
            localStorage.setItem('userId', state.userId)
            localStorage.setItem('expirationTime', state.expirationTime + '')
        },
        // 登出
        logout(state, action) {
            state.isLogged = false;
            state.token = null;
            state.userId = null;
            localStorage.removeItem('token');
            localStorage.removeItem("user")
        }
    }
})

export const { login, logout } = userSlice.actions