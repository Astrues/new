import React from 'react'
import { useGetSongsListQuery } from '../../../../store/api/songsApi'
import RecSongList from './RecSongList';
import styles from './index.module.css'
export default function RecomLists() {
    const { data, isSuccess } = useGetSongsListQuery()
    let songs = null
    if (isSuccess) {
        songs = data.result;
    }
    return (
        <div className={styles.RecomLists}>
            {isSuccess &&
                songs.map(e => <RecSongList
                    song={e}
                    key={e.id} />)
            }
        </div>
    )
}