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
        <div>
            <h2>Réservation</h2>
            {confirmationMessage && <p>{confirmationMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Prénom</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Nom</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Nombre de places</label>
                    <input type="number" value={numberOfTickets} onChange={(e) => setNumberOfTickets(e.target.value)} min="1" required />
                </div>
                <div>
                    <label>Moyen de paiement</label>
                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="creditCard">Carte de crédit</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <button type="submit">Réserver</button>
            </form>
        </div>
    );
};

export default ReservationForm;