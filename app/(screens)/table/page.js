import { prisma } from '../../db.'

async function getPostings() {
  return prisma.posting.findMany()
}

export default async function Table() {
  // let postings = use(getPostings())
  // const postings = await prisma.posting.findMany()
  const postings = await getPostings()

  return (
    <main>
      <table className='border-collapse'>
        <thead>
          <tr>
            <th className='py-2 px-4 bg-gray-100 border-b'>Job Title</th>
            <th className='py-2 px-4 bg-gray-100 border-b'>Company Name</th>
            <th className='py-2 px-4 bg-gray-100 border-b'>
              Posted Experience Level
            </th>
            <th className='py-2 px-4 bg-gray-100 border-b'>URL to Role</th>
            <th className='py-2 px-4 bg-gray-100 border-b'>Posting Issue</th>
            <th className='py-2 px-4 bg-gray-100 border-b'>
              Contact On Listing?
            </th>
          </tr>
        </thead>
        <tbody>
          {postings.map((posting) => (
            <tr key={posting.id}>
              <td className='py-2 px-4 border-b'>{posting.title}</td>
              <td className='py-2 px-4 border-b'>{posting.company}</td>
              <td className='py-2 px-4 border-b'>{posting.expLevel}</td>
              <td className='py-2 px-4 border-b'>
                <a href={posting.url} target='_blank'>
                  Link
                </a>
              </td>
              <td className='py-2 px-4 border-b'>{posting.issue}</td>
              <td className='py-2 px-4 border-b'>{posting.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
