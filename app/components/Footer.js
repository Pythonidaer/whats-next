import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={'bg-blue-500 py-5 mt-auto'}>
      <div className={'flex justify-center items-center'}>
        <p className={'text-sm text-white'}>
          &copy; #UseItIfYouWant 2023. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
