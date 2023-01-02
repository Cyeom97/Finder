import React from 'react'
import NavBar from '../NavBar/NavBar'
import SubNav from '../NavBar/SubNav/SubNav'
import SearchResults from './SearchResults/SearchResults'
import SearchResultSummary from './SearchResultSummary/SearchResultSummary'
import { useLocation } from 'react-router-dom'

const Search = () => {
  const search = useLocation().search
  const term = new URLSearchParams(search).get('term')
  const location = new URLSearchParams(search).get('location')

  return (
    <div>
      <NavBar term={term} location={location} />
      <SubNav />
      <SearchResultSummary term={term} location={location} />
      <SearchResults />
    </div>
  )
}

export default Search
