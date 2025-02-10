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
      </div>

      <div className="grid gap-4">
        {events.map((event) => (
          <div key={event._id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p className="text-gray-600">{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            {event.image && <img src={event.image} alt={event.name} />}
            <Link href={`/events/${event._id}`} legacyBehavior>
              <a className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Plus de détails
              </a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}