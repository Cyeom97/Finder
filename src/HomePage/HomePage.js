import logo from '../assets/yelp-logo-270.png'
import '../App.css'
import styles from './HomePage.module.css'
import { SearchSuggestions } from '../components/searchsuggestions/SearchSuggestions'
import { SearchBar } from '../SearchBar/SearchBar'

const HomePage = () => {
  return (
    <div className={styles['search-area']}>
      <div className={styles['titles']}>
        <h1 className={styles['home-title']}>Finder</h1>
        <div className={styles['home-yelp']}>
          <p>A</p>
          <img src={logo} className={styles['home-logo']} alt="logo"></img>
          <p>API</p>
        </div>
      </div>
      <SearchBar />
      <SearchSuggestions />
    </div>
  )
}

export default HomePage
