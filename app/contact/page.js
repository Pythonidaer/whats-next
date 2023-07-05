import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <main>
      <div className='bg-blue-100 rounded-lg shadow-md p-6 lg:mx-auto sm:mx-4 max-w-lg md:bg-blue md:p-8 mt-5'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Contact</h2>
        <div className='flex flex-col items-center text-white'>
          <a
            href='https://github.com/pythonidaer'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded btn-blue w-48 flex items-center justify-center mb-4 hover:shadow-md bg-blue-500 py-2'
          >
            <FaGithub className='mr-2' />
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/jonamichahammo'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded btn-blue w-48 flex items-center justify-center mb-4 hover:shadow-md bg-blue-500 py-2'
          >
            <FaLinkedin className='mr-2' />
            LinkedIn
          </a>
          <a
            href='mailto:codefolio.work@gmail.com'
            className='rounded btn-blue w-48 flex items-center justify-center hover:shadow-md bg-blue-500 py-2'
          >
            <FaEnvelope className='mr-2' />
            Gmail
          </a>
        </div>
      </div>
    </main>
  )
}
