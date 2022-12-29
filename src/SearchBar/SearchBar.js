import React from 'react'
import styles from './SearchBar.module.css'

export function SearchBar(props) {
  const smallClass = props.small ? '' : 'is-medium'
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-static ${smallClass}`}>Search</button>
        </p>
        <p className="control">
          <input
            className={`input ${smallClass} ${styles['input-control']}`}
            type="text"
            placeholder="ramen, nightclubs, nail salons"
          />
        </p>
        <p className="control">
          <button className={`button is-static ${smallClass}`}>Where</button>
        </p>
        <p className="control">
          <input
            className={`input ${smallClass}`}
            type="text"
            placeholder="Location"
          />
        </p>
        <div className={`button ${smallClass}`} id={styles['search-button']}>
          <span className="icon is-small" id={styles['icon']}>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>
  )
}
