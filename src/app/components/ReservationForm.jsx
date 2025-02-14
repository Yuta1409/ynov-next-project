import React, { useState } from 'react';

const ReservationForm = ({ eventDetails }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [numberOfTickets, setNumberOfTickets] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation des données
        if (!validateEmail(email)) {
            alert('Veuillez entrer un email valide.');
            return;
        }
        if (numberOfTickets <= 0) {
            alert('Le nombre de places doit être supérieur à zéro.');
            return;
        }

        // Envoi de la requête à l'API
        const response = await fetch('/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                numberOfTickets,
                paymentMethod,
                eventId: eventDetails.id,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            setConfirmationMessage(`Votre réservation a bien été enregistrée ! Numéro de confirmation : ${data.confirmationNumber}`);
        } else {
            alert('Une erreur est survenue lors de la réservation. Veuillez réessayer.');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="p-6 border rounded-lg shadow-lg bg-gray-800 text-white">
            <h2 className="text-3xl font-semibold mb-4">Réservation</h2>
            {confirmationMessage && <p className="mb-4 text-green-500">{confirmationMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Prénom</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Nom</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Nombre de places</label>
                    <input
                        type="number"
                        value={numberOfTickets}
                        onChange={(e) => setNumberOfTickets(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                        min="1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Moyen de paiement</label>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
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
        </div>
    );
};

export default ReservationForm;