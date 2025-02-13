import { NextResponse } from 'next/server';
import connectToDatabase from '../../db';
import Reservation from '../../models/Reservation';

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    console.log('Database connection established in GET request');
    const { eventId } = await params;

    if (eventId) {
      const reservations = await Reservation.find({ eventId });
      if (reservations.length > 0) {
        return NextResponse.json(reservations);
      } else {
        return NextResponse.json({ error: 'No reservations found for this event' }, { status: 404 });
      }
    } else {
      return NextResponse.json({ error: 'Event ID is required' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return NextResponse.json({ error: 'Failed to fetch reservations' }, { status: 500 });
  }
}