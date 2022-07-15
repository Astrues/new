import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { baseUrl } from '../../base'
const songsApi = createApi({
    reducerPath: "songsApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints(build) {
        return {
            // 获取推荐歌单
            getSongsList: build.query({
                query() {
                    return '/personalized?limit=10'
                }
            }),
            // 获取轮播图
            getBanner: build.query({
                query() {
                    return '/banner'
                }
            }),
            // 获取歌单详细信息
            getSongsDetail: build.query({
                query(id) {
                    return `/playlist/detail?id=${id}`
                }
            }),
            // 获取音乐详细信息(可传入多个id用,分隔)
            getSongDetail: build.query({
                query(id) {
                    return `/song/detail?ids=${id}`
                }
            }),
            // 获取音乐url

            // 热搜详细
            getHotSearch: build.query({
                query(){
                    return  "/search/hot/detail"
                }
            })
        }
    }
})
export const {
    useGetSongsListQuery,
    useGetBannerQuery,
    useGetSongsDetailQuery,
    useGetSongDetailQuery,
    useGetHotSearchQuery,
} = songsApi
export default songsApi