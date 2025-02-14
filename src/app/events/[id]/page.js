"use client";

import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { EventDetail } from '../../components/EventDetail';
import { Navbar } from '../../components/Navbar';

export default function EventDetails() {
  const router = useRouter();
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/events/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch event details');
          }
          return res.json();
        })
        .then((data) => {
          setEvent(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching event details:', error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!event) {
    return <p>No event found</p>;
  }

  const handleReserveClick = () => {
    localStorage.setItem('eventId', event._id);
    router.push(`/reservations/${event._id}`);
  };

  return (
    <div>
      <Navbar />
      <main className="relative min-h-screen p-24 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 clip-hexagon animate-pulse"></div>
          <div className="absolute top-10 right-1/4 w-24 h-24 bg-indigo-500 clip-hexagon animate-bounce"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-green-500 clip-hexagon animate-spin"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500 clip-hexagon animate-ping"></div>
        </div>
        <div className="relative z-10 container mx-auto">
          <EventDetail event={event} />
        </div>
      </main>
    </div>
  );
}