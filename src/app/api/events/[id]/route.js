import { NextResponse } from 'next/server';
import connectToDatabase from '../../db'; 
import Event from '../../models/Event'; 

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    console.log('Database connection established in GET request');
    const { id } = await params;
    
    if (id) {
      const event = await Event.findById(id);
      if (event) {
        return NextResponse.json(event);
      } else {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
      }
    } else {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 });
  }
}