'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

async function getEvents() {
  const res = await fetch('/api/events', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch events')
  }
  return res.json()
}

export default function EventsPage() {
  const handleClick = async () => {
    const newEvent = {
      name: `Event ${new Date().toISOString()}`,
      date: new Date().toISOString().split('T')[0],
      description: 'This is a new event added via the API'
    }

    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent)
    })

    if (res.ok) {
      const addedEvent = await res.json()
      setEvents([...events, addedEvent])
    }
  }

  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents().then(setEvents)
  }, [])

  return (
    <main className="min-h-screen p-24">
      <nav className="mb-8 space-x-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
        <Link href="/events" className="text-blue-500 hover:text-blue-700">Events</Link>
      </nav>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Events</h1>
        <button 
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Event
        </button>
      </div>
      
      <div className="grid gap-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p className="text-gray-600">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
} 