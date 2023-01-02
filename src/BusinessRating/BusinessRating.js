import React from 'react'
import styles from './BusinessRating.module.css'

const BusinessRating = (props) => {
  return (
    <div className={styles.rating}>
      <p>
        {props.rating} <i class="fa-solid fa-star"></i>
      </p>
      <p>{props.reviewCount} Reviews</p>
    </div>
  )
}

export default BusinessRating
