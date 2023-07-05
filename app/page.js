import styles from './page.module.css'
import { prisma } from './db.'
import { redirect } from 'next/navigation'

async function createPosting(data) {
  'use server'
  const title = data.get('title')?.valueOf()
  const company = data.get('company')?.valueOf()
  const expLevel = data.get('expLevel')?.valueOf()
  const url = data.get('url')?.valueOf()
  const issue = data.get('issue')?.valueOf()
  const contact = data.get('contact')?.valueOf()

  switch (true) {
    case title.length === 0:
      throw new Error('Invalid Title')
    case company.length === 0:
      throw new Error('Invalid Company')
    case expLevel.length === 0:
      throw new Error('Invalid Experience Level')
    case url.length === 0:
      throw new Error('Invalid URL')
    case issue.length === 0:
      throw new Error('Invalid Issue')
    case contact.length === 0:
      throw new Error('Invalid Contact')
    // Add more cases for other fields as needed
    default:
      // Default case if none of the conditions match
      break
  }

  try {
    await prisma.posting.create({
      data: {
        title,
        company,
        expLevel,
        url,
        issue,
        contact,
      },
    })
  } catch (error) {
    console.error(error)
  }
  await redirect('/table')
}

export default async function Page() {
  return (
    <main className={styles.main}>
      <p className='text-center font-bold text-lg mt-8 mb-4'>
        Submit a Job Posting you took Issue With
      </p>

      <form
        action={createPosting}
        className={`bg-blue-100 p-4 rounded-lg ${styles.formContainer} `}
      >
        <label className={styles.label} htmlFor='title'>
          Name of Role:
        </label>
        <input
          className={styles.inputField}
          type='text'
          id='title'
          name='title'
          required
        />

        <label className={styles.label} htmlFor='company'>
          Name of Employer:
        </label>
        <input
          className={` ${styles.inputField}`}
          type='text'
          id='company'
          name='company'
          required
        />

        <label className={styles.label} htmlFor='url'>
          Link to Role:
        </label>
        <input
          className={styles.inputField}
          type='text'
          id='url'
          name='url'
          required
        />

        <label className={styles.label} htmlFor='expLevel'>
          Experience Level:
        </label>
        <input
          className={styles.inputField}
          type='text'
          id='expLevel'
          name='expLevel'
          required
        />

        <label className={styles.label} htmlFor='issue'>
          Bone to Pick:
        </label>
        <textarea
          className={styles.textarea}
          id='issue'
          name='issue'
          rows='4'
          required
        ></textarea>

        <label className={styles.label}>Job Listing Contact:</label>
        <div className='flex items-center'>
          <input
            className={styles.radioButton}
            type='radio'
            id='Yes'
            name='contact'
            value='Yes'
            required
          />
          <label className={styles.label} htmlFor='Yes'>
            Yes
          </label>
        </div>
        <div className='flex items-center'>
          <input
            className={styles.radioButton}
            type='radio'
            id='No'
            name='contact'
            value='No'
            required
          />
          <label className={styles.label} htmlFor='No'>
            No
          </label>
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'
          type='submit'
        >
          Submit
        </button>
      </form>
    </main>
  )
}
