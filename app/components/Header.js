'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  const pathname = usePathname()
  const isCurrentPage = (href) => {
    return pathname === href ? styles.navLinkActive : styles.navLinkInactive
  }
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href='/' className={isCurrentPage('/')}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/about' className={isCurrentPage('/about')}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={isCurrentPage('/table')} href='/table'>
              Table
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={isCurrentPage('/contact')} href='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
