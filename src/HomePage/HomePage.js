import logo from '../assets/yelp-logo-270.png'
import '../App.css'
import styles from './HomePage.module.css'
import { SearchSuggestions } from '../components/searchsuggestions/SearchSuggestions'

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
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static is-medium">Search</button>
        </p>
        <p className="control">
          <input
            className={`input is-medium ${styles['input-control']}`}
            type="text"
            placeholder="ramen, nightclubs, nail salons"
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">Where</button>
        </p>
        <p className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="Location"
          />
        </p>
        <div className="button is-medium" id={styles['search-button']}>
          <span className="icon is-small" id={styles['icon']}>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
      <SearchSuggestions />
    </div>
  )
}

export default HomePage
