import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useGetSongsDetailQuery } from '../../store/api/songsApi'
import styles from './index.module.css'
import Top from './Top'
import Middle from './Middle'
export default function DetailPage() {
    const { id } = useParams()
    const { data, isSuccess, isLoading } = useGetSongsDetailQuery(id)
    return (
        <div className={styles.Detail}>
            {isLoading && <h2>Loading...</h2>}
            {(!isSuccess && !isLoading) && <h2>网络出现问题请稍后再试</h2>}
            {isSuccess &&
                <div>
                    <Top data={data} />
                    <Middle data={data} />
                    <Outlet />
                </div>
            }
        </div>
    )
}
