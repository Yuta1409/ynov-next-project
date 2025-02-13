import { NextResponse } from 'next/server';
import connectToDatabase from '../db';
import Reservation from '../../api/models/Reservation';
import Event from '../../api/models/Event';

export async function GET(request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get('eventId');

  try {
    let reservations;
    if (eventId) {
      reservations = await Reservation.find({ eventId });
    } else {
      reservations = await Reservation.find({});
    }
    return NextResponse.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}

export async function POST(request) {
  await connectToDatabase();
  try {
    const { eventId, firstName, lastName, email, seats, paymentMethod } = await request.json();

    console.log('Received data:', { eventId, firstName, lastName, email, seats, paymentMethod });

    if (!eventId || !firstName || !lastName || !email || !seats || !paymentMethod) {
      console.error('Missing required fields');
      return NextResponse.json({ message: 'Tous les champs sont requis.' }, { status: 400 });
    }

    const event = await Event.findById(eventId);

    if (!event) {
      console.error('Event not found');
      return NextResponse.json({ message: 'Événement non trouvé.' }, { status: 404 });
    }

    if (event.availableSeats < seats) {
      console.error('Not enough seats available');
      return NextResponse.json({ message: 'Nombre de places insuffisant.' }, { status: 400 });
    }

    const reservation = new Reservation({
      eventId,
      firstName,
      lastName,
      email,
      seats,
      paymentMethod,
      reservationDate: new Date(),
    });

    await reservation.save();

    event.availableSeats -= seats;

    // Ensure availableSeats is a valid number
    if (isNaN(event.availableSeats)) {
      console.error('Invalid availableSeats value:', event.availableSeats);
      return NextResponse.json({ message: 'Invalid availableSeats value' }, { status: 500 });
    }

    await event.save();

    return NextResponse.json({ message: 'Réservation effectuée avec succès.' }, { status: 201 });
  } catch (error) {
    console.error('Error creating reservation:', error);
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}