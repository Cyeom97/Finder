import React from 'react'
import SearchResult from './SearchResult/SearchResult'
import styles from './SearchResults.module.css'

const SearchResults = (props) => {
  if (!props.businesses || !props.businesses.length) {
    return <div></div>
  }
  const results = props.businesses.map((b) => (
    <SearchResult key={b.id} businesses={b} />
  ))
  return <div className={styles['search-results']}>{results}</div>
}
export default SearchResults
