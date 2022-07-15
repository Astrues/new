import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
export default function Search() {
    return (
        <div className={styles.Search}>
            <div className={styles.Content}>
                <FontAwesomeIcon icon={faSearch} className={styles.SearchIcon} />
                <input type="text"
                    placeholder='大家都在搜只因你太美'
                    className={styles.Input}
                />
            </div>
        </div>
    )
}