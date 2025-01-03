'use client'

import { useState } from 'react'

export function Assistant() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission
    setMessage('')
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Family Assistant</h2>
      <div className="bg-white rounded-lg shadow-sm p-4 min-h-[200px]">
        {/* Chat messages will go here */}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2"
        />
        <button
          type="submit"
          className="bg-primary-600 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  )
}
