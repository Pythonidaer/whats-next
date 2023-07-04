// 'use client'
// import { prisma } from '../../db.'
import TableRow from '../../components/TableRows'

// async function getPostings() {
//   return prisma.posting.findMany()
// }

export const dynamic = 'force-dynamic'

export default async function Page() {
  // let postings = use(getPostings())
  // const postings = await prisma.posting.findMany()
  // const postings = await getPostings()

  return (
    <main>
      <div className='overflow-x-auto'>
        <table className='min-w-full border-collapse'>
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
          <TableRow />
        </table>
      </div>
    </main>
  )
}
