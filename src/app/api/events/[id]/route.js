import { NextResponse } from 'next/server';
import connectToDatabase from '../../db'; // Assurez-vous que le chemin est correct
import Event from '../../models/Event'; // Assurez-vous que le chemin est correct

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    console.log('Database connection established in GET request');
    const { id } = await params;

    console.log('Requested ID:', id); // Ce log devrait apparaître dans le terminal

    if (id) {
      const event = await Event.findById(id);
      if (event) {
        console.log('Event found:', event); // Ce log devrait apparaître dans le terminal
        return NextResponse.json(event);
      } else {
        console.log('Event not found for ID:', id); // Ce log devrait apparaître dans le terminal
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
      }
    } else {
      console.log('ID is missing in the request'); // Ce log devrait apparaître dans le terminal
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error in GET request:', error); // Ce log devrait apparaître dans le terminal
    return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 });
  }
}