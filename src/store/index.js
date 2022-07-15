import { configureStore } from '@reduxjs/toolkit';
import userApi from "./api/userApi"
import { setupListeners } from '@reduxjs/toolkit/query'
import { userSlice } from './reducer/userSlice';
import songsApi from './api/songsApi';
import { songDataReducer } from './reducer/songSlice';
const store = configureStore({
    reducer: {
        // 使用RTKQ进行登录请求
        [userApi.reducerPath]: userApi.reducer,
        [songsApi.reducerPath]: songsApi.reducer,
        // 使用redux存储用户信息
        user: userSlice.reducer,
        songData: songDataReducer
    },
    // 注册中间件缓存?
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            songsApi.middleware,
        ),
})
setupListeners(store.dispatch)
export default store