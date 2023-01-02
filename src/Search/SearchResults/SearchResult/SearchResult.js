import React from 'react'
import BusinessRating from '../../../BusinessRating/BusinessRating'
import styles from './SearchResult.module.css'

const SearchResult = (props) => {
  if (!props.businesses) {
    return <div></div>
  }
  return (
    <div className={styles['search-result']}>
      <img
        src={props.businesses.image_url}
        alt="business"
        className={styles['business-image']}
      />
      <div className={styles['business-info']}>
        <h2 className="subtitle">{props.businesses.name}</h2>
        <BusinessRating
          reviewCount={props.businesses.review_count}
          rating={props.businesses.rating}
        />
        <p>
          $$ <span className="tag">Burgers</span>{' '}
          <span className="tag">Fast Food</span>
        </p>
      </div>
      <div className={styles['contact-info']}>
        <p>{props.businesses.location.display_address}</p>
      </div>
    </div>
  )
}
export default SearchResult
