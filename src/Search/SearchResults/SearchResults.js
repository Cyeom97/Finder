import React from 'react'
import SearchResult from './SearchResult/SearchResult'
import styles from './SearchResults.module.css'
import Loading from '../../Loading/Loading'

const SearchResults = (props) => {
  let results = <Loading />
  let biz = props.businesses
  if (biz && biz.length) {
    results = biz.map((b) => <SearchResult key={b.id} businesses={b} />)
  }

  return <div className={styles['search-results']}>{results}</div>
}
export default SearchResults
