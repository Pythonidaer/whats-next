'use client'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  const handleClick = (event) => {
    event.preventDefault()
    console.log('test')
    router.push('/table')
  }
  return (
    <main className={styles.main}>
      <p>Submit a Job Posting you took Issue With</p>
      <form className={styles.formContainer}>
        <label className={styles.label} htmlFor='role'>
          Name of Role:
        </label>
        <input
          className={styles.inputField}
          type='text'
          id='role'
          name='role'
          required
        />

        <label className={styles.label} htmlFor='employer'>
          Name of Employer:
        </label>
        <input
          className={styles.inputField}
          type='text'
          id='employer'
          name='employer'
          required
        />

        <label className={styles.label} htmlFor='link'>
          Link to Role:
        </label>
        <input
          className={styles.inputField}
          type='text'
          id='link'
          name='link'
          required
        />

        <label className={styles.label} htmlFor='bone'>
          Bone to Pick:
        </label>
        <textarea
          className={styles.textarea}
          id='bone'
          name='bone'
          rows='4'
          required
        ></textarea>

        <label className={styles.label}>Job Listing Contact:</label>
        <div>
          <input
            className={styles.radioButton}
            type='radio'
            id='yes'
            name='contact'
            value='yes'
            required
          />
          <label className={styles.label} htmlFor='yes'>
            Yes
          </label>
        </div>
        <div>
          <input
            className={styles.radioButton}
            type='radio'
            id='no'
            name='contact'
            value='no'
            required
          />
          <label className={styles.label} htmlFor='no'>
            No
          </label>
        </div>

        <button
          className={styles.submitButton}
          type='submit'
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </main>
  )
}
