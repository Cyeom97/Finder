import React from 'react'
import styles from './SearchResultSummary.module.css'

export function SearchResultSummary() {
  return (
    <div className={styles.container}>
      <div className={styles['search-summary']}>
        <h1 className="subtitle">
          <strong>burgers</strong> new york
        </h1>
        <p>Showing 1-20 out of 543 results</p>
      </div>
    </div>
  )
}
