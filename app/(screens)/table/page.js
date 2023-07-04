export default function Table() {
  return (
    <main>
      <table class='border-collapse'>
        <thead>
          <tr>
            <th class='py-2 px-4 bg-gray-100 border-b'>Name of Role</th>
            <th class='py-2 px-4 bg-gray-100 border-b'>Name of Employer</th>
            <th class='py-2 px-4 bg-gray-100 border-b'>Link to Role</th>
            <th class='py-2 px-4 bg-gray-100 border-b'>Bone to Pick</th>
            <th class='py-2 px-4 bg-gray-100 border-b'>Job Listing Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='py-2 px-4 border-b'>a{/* Value for Name of Role */}</td>
            <td class='py-2 px-4 border-b'>
              b{/* Value for Name of Employer */}
            </td>
            <td class='py-2 px-4 border-b'>c{/* Value for Link to Role */}</td>
            <td class='py-2 px-4 border-b'>d{/* Value for Bone to Pick */}</td>
            <td class='py-2 px-4 border-b'>
              e{/* Value for Job Listing Contact */}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
