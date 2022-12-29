import React from 'react'
import styles from './SearchBar.module.css'

export function SearchBar() {
  return (
    <div>
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
    </div>
  )
}
