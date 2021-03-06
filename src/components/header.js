import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const Header = ({ siteTitle, siteSlogan }) => (
  <div className={styles.header}>
    <div className={styles['header-layout']}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={styles.logo}>
          {siteTitle}
        </Link>
      </h1>
      {siteSlogan}
    </div>
  </div>
)

export default Header
