import React from 'react'
import styles from './SubNavItem.module.css'

const SubNavItem = (props) => {
  const borderClass = props.showRightBorder ? styles['right-border'] : ''
  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <div
          className={`${styles['sub-nav-item']} ${borderClass}`}
          aria-haspopup="true"
          aria-controls="dropdown-menu4"
        >
          <span className="icon is-small">
            <i className={`fas ${props.icon}`}></i>
          </span>
          <span>{props.label}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <div className="dropdown-menu" id="dropdown-menu4" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            {props.label === 'Restaurant' ? (
              <div>
                <div className={`${styles['drops']}`}>
                  <p>
                    <i className="fa-solid fa-bicycle"></i> Delivery
                  </p>
                  <p>
                    <i className="fa-solid fa-burger"></i> Burgers
                  </p>
                </div>
                <div className={`${styles['drops']}`}>
                  <p>
                    <i className="fa-solid fa-burrito"></i> Mexican
                  </p>
                  <p>
                    <i className="fa-solid fa-shrimp"></i> Thai
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SubNavItem
