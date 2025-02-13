"use client";

import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import EventSummary from '../../components/EventSummary';
import Navbar from '../../components/Navbar';

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
      <main className="min-h-screen p-24 bg-gray-100">
        <EventSummary event={event} />
        <button onClick={handleReserveClick} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Réserver cet événement
        </button>
      </main>
    </div>
  );
}