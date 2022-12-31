import React from 'react'
import BusinessRating from '../../../BusinessRating/BusinessRating'
import styles from './SearchResult.module.css'

const SearchResult = () => {
  return (
    <div className={styles['search-result']}>
      <img
        src="http://via.placeholder.com/150"
        alt="business"
        className={styles['business-image']}
      />
      <div className={styles['business-info']}>
        <h2 className="subtitle">Burger Place</h2>
        <BusinessRating />
        <p>
          $$ <span className="tag">Burgers</span>{' '}
          <span className="tag">Fast Food</span>
        </p>
      </div>
      <div className={styles['contact-info']}>
        <p>+123483872</p>
        <p>Example Street 5</p>
        <p>12345</p>
        <p>New York</p>
      </div>
    </div>
  )
}
export default SearchResult
