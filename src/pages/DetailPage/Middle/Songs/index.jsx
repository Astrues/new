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
    <div className={styles.Container}>
      <div className={styles.Top}>
        <div>操作</div>
        <div>标题</div>
        <div>歌手</div>
        <div>专辑</div>
        <div>时间</div>
      </div>
      {/* <h2>雷猴</h2> */}
      {(isLoading && !isSuccess) && <h2>Loading....</h2>}
      {isSuccess && songsData.songs.map((item,index) => <Song key={item.id} data={item} i={index}/>)}
    </div>
  )
}
