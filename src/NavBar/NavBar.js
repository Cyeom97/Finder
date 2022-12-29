import React from 'react'
import styles from './NavBar.module.css'
// import logo from '../assets/yelp-logo-270.png'
import { SearchBar } from '../SearchBar/SearchBar'

export function NavBar() {
  return (
    <div>
      <div className={styles['nav-bar']}>
        <h1 className={styles['my-title']}>Finder</h1>
        <i class="fa-brands fa-yelp fa-2xl" id={styles['logo']}></i>
        <SearchBar small />
      </div>
    </div>
  )
}
