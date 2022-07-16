import React from 'react'
import { useGetRankDataQuery } from '../../../store/api/songsApi'
import styles from './index.module.css'
import Official from './Official';
import Tatal from './Tatal'
export default function Rank() {
  const { data, isSuccess, isLoading } = useGetRankDataQuery()
  let off = null, tal = null;
  if (isSuccess) {
    off = data.list.filter((item, index) => index <= 3)
    tal = data.list.filter((item, index) => index > 3)
  }
  return (
    <div className={styles.Rank}>
      {isLoading && <h2>Loading.....</h2>}
      {isSuccess && <>
        < Official off={off} />
        <Tatal tal={tal} />
      </>}
    </div>
  )
}
