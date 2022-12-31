import React from 'react'
import styles from './SearchResult.module.css'

export function SearchResult() {
  return (
    <div className={styles['search-result']}>
      <img
        src="http://via.placeholder.com/150"
        alt="business"
        className={styles['business-image']}
      />
      <div className={styles['business-info']}>
        <h2 className="subtitle">Burger Place</h2>
        <p>Rating</p>
        <p>
          $$ <span className="tag">Burgers</span>{' '}
          <span className="tag">Fast Food</span>
        </p>
      </div>
      <div>
        <p>+123483872</p>
        <p>Example Street 5</p>
        <p>12345</p>
        <p>New York</p>
      </div>
    </div>
  )
}
