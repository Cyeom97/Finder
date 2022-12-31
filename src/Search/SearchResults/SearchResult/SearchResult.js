import React from 'react'
import styles from './SearchResult.module.css'

export function SearchResult() {
  return (
    <div className={styles['search-result']}>
      <img src="http://via.placeholder.com/150" alt="business image" />
      <p>General Info</p>
      <p>Address Data</p>
    </div>
  )
}
