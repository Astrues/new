import React from 'react'
import { useGetSongDetailQuery, useGetSongsDetailQuery } from '../../../../store/api/songsApi';
import { useParams } from 'react-router-dom'
import Song from './Song';
import styles from './index.module.css'
export default function Songs() {
  const { id } = useParams();
  const { data } = useGetSongsDetailQuery(id)
  const songsArr = data.playlist.trackIds
  let idArr = [];
  songsArr.map(item => idArr.push(item.id));
  const { data: songsData, isSuccess, isLoading } = useGetSongDetailQuery(idArr.join())
  return (
    <div className={styles.Body}>
      <table className={styles.Container}>
        <thead className={styles.Top}>
          <tr>
            <th>操作</th>
            <th>标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess && songsData.songs.map((item, index) => <Song key={item.id} data={item} i={index} />)}
        </tbody>
      </table>
      {(isLoading && !isSuccess) && <h2>Loading....</h2>}
    </div>
  )
}
