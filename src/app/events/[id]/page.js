'use client'
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function EventDetails() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (id) {
      fetch(`/api/events/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch event details')
          }
          return res.json()
        })
        .then((data) => {
          setEvent(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching event details:', error)
          setError(error.message)
          setLoading(false)
        })
    }
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  if (!event) {
    return <p>No event found</p>
  }

  return (
    <main className="min-h-screen p-24">
      <nav className="mb-8 space-x-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
        <Link href="/events" className="text-blue-500 hover:text-blue-700">Events</Link>
      </nav>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">{event.name}</h1>
      </div>

      <div className="p-4 border rounded-lg shadow">
        <p className="text-gray-600">{event.date}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
        {event.image && <img src={event.image} alt={event.name} />}
      </div>

      <Link href={`/booking/${id}`} legacyBehavior>
        <a className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Réserver cet événement
        </a>
      </Link>
    </main>
  )
}