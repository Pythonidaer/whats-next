import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          &copy; #UseItIfYouWant 2023. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
