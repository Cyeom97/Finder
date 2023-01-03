import React from 'react'
import NavBar from '../NavBar/NavBar'
import SubNav from '../NavBar/SubNav/SubNav'
import SearchResults from './SearchResults/SearchResults'
import SearchResultSummary from './SearchResultSummary/SearchResultSummary'
import { useLocation, useNavigate } from 'react-router-dom'
import useBusinessSearch from '../api/yelp-api/useBusinessSearch'

const Search = () => {
  const searching = useLocation().search
  const navigate = useNavigate()
  const term = new URLSearchParams(searching).get('term')
  const location = new URLSearchParams(searching).get('location')
  const [businesses, results, searchParams, callSearch] = useBusinessSearch(
    term,
    location
  )

  const search = (term, location) => {
    const encodedTerm = encodeURI(term)
    const encodedLocation = encodeURI(location)
    navigate(`/search?term=${encodedTerm}&location=${encodedLocation}`)
    callSearch({ term, location })
  }

  return (
    <div>
      <NavBar term={term} location={location} search={search} />
      <SubNav />
      <SearchResultSummary
        term={searchParams.term}
        location={searchParams.location}
        results={results}
        shownResults={businesses ? businesses.length : 0}
      />
      <SearchResults businesses={businesses} />
    </div>
  )
}

export default Search
