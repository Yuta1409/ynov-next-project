"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ReservationPage = () => {
  const router = useRouter();
  const [eventId, setEventId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    seats: 1,
    paymentMethod: 'creditCard',
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
      router.push('/confirmation');
    } else {
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <Navbar />
      <main className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-purple-500 clip-circle animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-indigo-500 clip-circle animate-bounce"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-green-500 clip-circle animate-spin"></div>
          <div className="absolute bottom-1/4 right-1/2 w-16 h-16 bg-blue-500 clip-circle animate-ping"></div>
        </div>
        <div className="relative z-10 w-full max-w-lg p-6 border rounded-lg shadow-lg bg-gray-800 text-white">
          <h1 className="text-3xl font-semibold mb-4 text-center">Réserver un événement</h1>
          {eventId ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Nom</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Nombre de places</label>
                <input
                  type="number"
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Moyen de paiement</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                >
                  <option value="creditCard">Carte de crédit</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300">
                Réserver
              </button>
            </form>
          ) : (
            <p className="text-red-500">No event found</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReservationPage;