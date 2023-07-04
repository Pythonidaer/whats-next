'use client'
export default function RefreshButton() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return <button onClick={handleRefresh}>Refresh</button>
}
