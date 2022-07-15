import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
import { useGetHotSearchQuery } from '../../../store/api/songsApi'
import { useState } from 'react'
import Item from './Item'
export default function Search() {
    const { data, isSuccess, isLoading } = useGetHotSearchQuery()
    const [isShowRank, setIsShowRank] = useState(false)
    const focusHandler = () => {
        if (isSuccess) {
            console.log(data);
        }
        setIsShowRank(true)
    }
    const blurHandler = () => {
        setTimeout(() => {
            setIsShowRank(false)
        }, 500);
    }
    return (
        <>
            <div className={styles.Search}>
                <div className={styles.Content}>
                    <FontAwesomeIcon icon={faSearch} className={styles.SearchIcon} />
                    <input
                        onFocus={focusHandler}
                        onBlur={blurHandler}
                        type="text"
                        placeholder='大家都在搜只因你太美'
                        className={styles.Input}
                    />
                </div>
            </div>
            {isShowRank &&
                <div className={styles.hotSearch}>
                    <h2>热搜榜</h2>
                    {isLoading && <h2>Loading...</h2>}
                    {isSuccess && data.data.map((item, index) => <Item data={item} index={index} key={item.searchWord} />)}
                </div>
            }
        </>
    )
}