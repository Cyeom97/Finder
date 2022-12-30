import React from 'react'
import { SubNavItem } from './SubNavItem/SubNavItem'
import styles from './SubNav.module.css'

export function SubNav() {
  return (
    <div className={styles.container}>
      <div className={styles['sub-nav']}>
        <div>
          <SubNavItem label="Restaurant" icon="fa-utensils" />
          <SubNavItem label="Home Services" icon="fa-home" />
          <SubNavItem label="Auto Services" icon="fa-car" />
          <SubNavItem label="More" icon="fa-info-circle" showRightBorder />
        </div>
        <div>
          <button className={`button ${styles['subnav-button']}`}>
            <span className="icon">
              <i className="fas fa-pen"></i>
            </span>
            <span>Write a Review</span>
          </button>
        </div>
      </div>
    </div>
  )
}
