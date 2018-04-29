import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={styles.logo}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
