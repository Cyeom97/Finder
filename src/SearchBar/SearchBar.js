import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.term || '')
  const [location, setLocation] = useState(props.location || '')

  const changeTerm = (e) => {
    setTerm(e.target.value)
  }
  const changeLocation = (e) => {
    setLocation(e.target.value)
  }

  const submit = (e) => {
    if (typeof props.search === 'function') {
      props.search(term, location)
    }
    console.log(term, location)
    e.preventDefault()
  }

  const smallClass = props.small ? '' : 'is-medium'
  return (
    <form onSubmit={submit}>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-static ${smallClass}`}>Search</button>
        </p>
        <p className="control">
          <input
            className={`input ${smallClass} ${styles['input-control']}`}
            onChange={changeTerm}
            type="text"
            placeholder="ramen, nightclubs, nail salons"
          />
        </p>
        <div className="control">
          <div className={`button is-static ${smallClass}`}>Where</div>
        </div>
        <p className="control">
          <input
            className={`input ${smallClass}`}
            onChange={changeLocation}
            type="text"
            placeholder="Location"
          />
        </p>
        <div
          className={`button ${smallClass}`}
          id={styles['search-button']}
          onClick={submit}
        >
          <span className="icon is-small" id={styles['icon']}>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </form>
  )
}
export default SearchBar
