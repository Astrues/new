import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { baseUrl } from '../../base'
const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        // prepareHeaders: (headers, a) => {
        //     // 获取用户的token
        //     const token = a.getState().user.token
        //     // 如果token存在将token传入请求头保存登录信息
        //     if (token) {
        //         headers.set("Authorization", `Bearer ${token}`)
        //     }
        //     return headers
        // }
    }),
    endpoints(build) {
        return {
            // 用户登录的方法
            loginPhone: build.mutation({
                query(user) {
                    return {
                        url: `login/cellphone?phone=${user.username}&password=${user.password}`,
                        method: 'post',
                        body: user
                    }
                }
            }),
            // 获取用户信息的方法
            getUserInfom: build.query({
                query(userId) {
                    return `/user/detail?uid=${userId}`
                }
            })
        }
    }
})
export const {
    useLoginPhoneMutation,
    useGetUserInfomQuery,
} = loginApi
export default loginApi