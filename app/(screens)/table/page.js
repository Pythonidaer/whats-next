import TableRow from '../../components/TableRows'
import RefreshButton from '@/app/components/RefreshButton'

export const dynamic = 'force-dynamic'

export default function Page() {
  return (
    <main>
      <div className='overflow-x-auto'>
        <table className='w-full md:w-4/5 md:mx-auto border-collapse'>
          <thead>
            <tr>
              <td colSpan='6' className='py-4 px-4'>
                <RefreshButton success={true} />
              </td>
            </tr>
            <tr>
              <th className='py-4 px-4 bg-blue-100 border-b whitespace-nowrap'>
                Job Title
              </th>
              <th className='py-4 px-4 bg-blue-100 border-b whitespace-nowrap'>
                Company Name
              </th>
              <th className='py-4 whitespace-nowrap px-4 bg-blue-100 border-b'>
                Posted Experience Level
              </th>
              <th className='py-4 px-4 bg-blue-100 border-b whitespace-nowrap'>
                URL to Role
              </th>
              <th className='py-4 px-4 bg-blue-100 border-b w-1/3 whitespace-nowrap min-w-[200px]'>
                Posting Issue
              </th>
              <th className='py-4 px-4 bg-blue-100 border-b whitespace-nowrap'>
                Contact On Listing?
              </th>
            </tr>
          </thead>
          <TableRow />
          <tfoot>
            <tr>
              <td
                colSpan='6'
                className='py-4 px-4 text-center bg-blue-100   text-blue-500'
              ></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  )
}
