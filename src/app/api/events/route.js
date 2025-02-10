import { NextResponse } from 'next/server';
import connectToDatabase from '../db';
import Event from '../models/Event';

export async function GET(request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const event = await Event.findById(id);
    if (event) {
      return NextResponse.json(event);
    } else {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
  }

  const events = await Event.find({});
  return NextResponse.json(events);
}

export async function POST(request) {
  await connectToDatabase();
  try {
    const newEvent = await request.json();
    const eventToAdd = new Event(newEvent);
    await eventToAdd.save();

    return NextResponse.json(eventToAdd, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add event' },
      { status: 400 }
    );
  }
}