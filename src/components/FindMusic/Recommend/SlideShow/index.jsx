import React from 'react'
import { useGetBannerQuery } from '../../../../store/api/songsApi'
import Banner from './Banner';
import styles from './index.module.css'

export default function SlideShow() {
    const { data, isSuccess } = useGetBannerQuery()
    return (
        <ul className={styles.SlideShow}>
            {isSuccess &&
                data.banners.map(item => <Banner key={item.targetId} data={item} />
                )
            }
        </ul>
    )
}
