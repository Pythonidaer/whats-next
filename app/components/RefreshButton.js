'use client'
import { FaSyncAlt } from 'react-icons/fa'

export default function RefreshButton({ success }) {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div>
      <button
        onClick={handleRefresh}
        className='rounded-full p-2 bg-blue-500 text-white'
      >
        <FaSyncAlt size={20} />
      </button>
    </div>
  )
}
