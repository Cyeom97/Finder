import logo from '../assets/yelp-logo-270.png'
import '../App.css'
import styles from './HomePage.module.css'
import SearchSuggestions from '../components/searchsuggestions/SearchSuggestions'
import SearchBar from '../SearchBar/SearchBar'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  let navigate = useNavigate()

  const search = (term, location) => {
    const urlEncodedTerm = encodeURI(term)
    const urlEncodedLocation = encodeURI(location)
    navigate(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    )
  }
  return (
    <div className={styles['body']}>
      <div className={styles['content']}>
        <div className={styles['search-area']}>
          <div className={styles['titles']}>
            <h1 className={styles['home-title']}>Finder</h1>
            <div className={styles['home-yelp']}>
              <p>A</p>
              <img src={logo} className={styles['home-logo']} alt="logo"></img>
              <p>API</p>
            </div>
          </div>
          <SearchBar search={search} />
          <SearchSuggestions />
        </div>
      </div>
    </div>
  )
}

export default HomePage
