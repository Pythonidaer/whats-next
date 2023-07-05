export default function About() {
  return (
    <main>
      <div className='bg-blue-100 rounded-lg shadow-md p-6  lg:mx-auto sm:mx-4 max-w-lg md:bg-blue md:p-8 mt-5'>
        <h2 className='text-2xl font-bold mb-4 text-center'>About</h2>
        <p className='text-lg mb-4'>
          I created this application to learn Next.js, Tailwind CSS, PostgreSQL,
          Prisma, and Vercel.
        </p>
        <p className='text-lg mb-4'>
          It was inspired by my personal experience during the job hunt, where I
          encountered numerous entry-level jobs that didn't match their true
          entry-level requirements.
        </p>
        <p className='text-lg'>
          Through this project, I aim to enhance my skills and contribute to
          creating better opportunities for aspiring professionals.
        </p>
      </div>
    </main>
  )
}
