import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { eventId, firstName, lastName, email, seats, paymentMethod } = data;

    // Validate the data
    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Here you would typically save the reservation to your database
    // For example:
    // const reservation = await saveReservation({ eventId, firstName, lastName, email, seats, paymentMethod });

    // Simulate a successful response
    return NextResponse.json({ message: 'Reservation successful' }, { status: 200 });
  } catch (error) {
    console.error('Error processing reservation:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}