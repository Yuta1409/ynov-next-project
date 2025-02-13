"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

const ReservationPage = () => {
  const router = useRouter();
  const [eventId, setEventId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    seats: 1,
    paymentMethod: '',
  });

  useEffect(() => {
    const storedEventId = localStorage.getItem('eventId');
    if (storedEventId) {
      setEventId(storedEventId);
      console.log(`Event ID from local storage: ${storedEventId}`);
    } else {
      console.error('No eventId found in local storage');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    if (!formData.email.includes('@')) {
      alert('Veuillez entrer un email valide.');
      return;
    }

    // Send reservation data to API
    const response = await fetch('/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventId,
        ...formData,
      }),
    });

    if (response.ok) {
      alert('Votre réservation a bien été enregistrée !');
      router.push(`/confirmation/${eventId}`);
    } else {
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-24 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Réserver un événement</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nom :</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black"
              />
            </div>
            <div>
              <label>Prénom :</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black"
              />
            </div>
            <div>
              <label>Email :</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black"
              />
            </div>
            <div>
              <label>Nombre de places :</label>
              <input
                type="number"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                required
                min="1"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black"
              />
            </div>
            <div>
              <label>Moyen de paiement :</label>
              <input
                type="text"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black"
              />
            </div>
            <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
              Réserver
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ReservationPage;