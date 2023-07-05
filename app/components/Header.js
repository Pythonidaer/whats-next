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
    <header className='bg-blue-500'>
      <nav className='flex items-center justify-end py-4 px-8'>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className={`text-white ${isCurrentPage('/')}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className={`text-white ${isCurrentPage('/about')}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/table'
              className={`text-white ${isCurrentPage('/table')}`}
            >
              Table
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className={`text-white ${isCurrentPage('/contact')}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
