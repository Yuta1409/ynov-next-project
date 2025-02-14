'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { EventCard } from '../components/EventCard'
import CreateFormEvents from '../components/CreateFormEvents'

async function getEvents() {
  const res = await fetch('/api/events', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch events')
  }
  return res.json()
}

export default function EventsPage() {
  const [events, setEvents] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    getEvents().then(setEvents)
  }, [])

  const handleCreateEvent = async (data) => {
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      const newEvent = await res.json()
      setEvents([...events, newEvent])
      setIsModalOpen(false)
    } else {
      console.error('Failed to create event')
    }
  }

  return (
    <div>
      <Navbar />
      <main className="relative min-h-screen p-24 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 clip-triangle animate-pulse"></div>
          <div className="absolute top-1/4 right-10 w-24 h-24 bg-indigo-500 clip-triangle animate-bounce"></div>
          <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-green-500 clip-triangle animate-spin"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-500 clip-triangle animate-ping"></div>
        </div>
        <div className="relative z-10 container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Events</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
            >
              Créer un nouvel événement
            </button>
          </div>

          <EventCard events={events} />
        </div>
      </main>
      <CreateFormEvents
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateEvent}
      />
    </div>
  );
}