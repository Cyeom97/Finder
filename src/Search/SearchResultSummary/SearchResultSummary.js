import React from 'react'
import styles from './SearchResultSummary.module.css'

const SearchResultSummary = (props) => {
  let resultStats = null
  if (props.results && props.shownResults) {
    resultStats = (
      <p>
        Showing 1-{props.shownResults} out of {props.results} results
      </p>
    )
  }

  const filterOpen = () => {
    if (props.isOpen) {
      props.setIsOpen(false)
    } else {
      props.setIsOpen(true)
    }
  }

  const filterTwoDollars = () => {
    if (props.twoDollars) {
      props.setTwoDollars(false)
    } else {
      props.setTwoDollars(true)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles['search-summary']}>
        <h1 className="subtitle">
          <strong>{props.term}</strong> {props.location}
        </h1>
        {resultStats}
      </div>
      <div className={styles.filters}>
        <button className="button">
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>All filters</span>
        </button>
        <div className="buttons has-addons">
          <button className="button">$</button>
          <button className="button" onClick={filterTwoDollars}>
            $$
          </button>
          <button className="button">$$$</button>
          <button className="button">$$$$</button>
        </div>
        <button className="button" onClick={filterOpen}>
          <span className="icon">
            <i className="fas fa-clock"></i>
          </span>
          <span>{props.isOpen === false ? 'Open Now' : 'All Results'}</span>
        </button>
      </div>
    </div>
  )
}
export default SearchResultSummary
