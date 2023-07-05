import { prisma } from '../db.'

async function getPostings() {
  'use server'
  return prisma.posting.findMany()
}

export default async function Page() {
  const postings = await getPostings()

  return (
    <tbody>
      {postings.map((posting) => (
        <tr key={posting.id}>
          <td className='py-2 px-4 border-b'>{posting.title}</td>
          <td className='py-2 px-4 border-b'>{posting.company}</td>
          <td className='py-2 px-4 border-b'>{posting.expLevel}</td>
          <td className='py-2 px-4 border-b'>
            <a
              href={posting.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              Link
            </a>
          </td>
          <td className='py-2 px-4 border-b'>{posting.issue}</td>
          <td className='py-2 px-4 border-b'>{posting.contact}</td>
        </tr>
      ))}
    </tbody>
  )
}
