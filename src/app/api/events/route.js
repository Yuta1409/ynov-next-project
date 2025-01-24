import { NextResponse } from 'next/server'

let events = [
  {
    id: 1,
    name: "Summer Music Festival",
    date: "2024-07-15",
    description: "A day full of live music performances and entertainment."
  },
  {
    id: 2,
    name: "Tech Conference 2024",
    date: "2024-09-20",
    description: "Annual technology conference featuring the latest innovations."
  },
  {
    id: 3,
    name: "Food & Wine Expo",
    date: "2024-10-05",
    description: "Explore culinary delights and wine tasting from around the world."
  }
]() 
return NextResponse.json(events)


export async function POST(request) {
  try {
    const newEvent = await request.json()
    const newId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1
  
    const eventToAdd = {
      id: newId,
      name: newEvent.name,
      date: newEvent.date,
      description: newEvent.description
    }
    
    events.push(eventToAdd)
    
    return NextResponse.json(eventToAdd, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add event' },
      { status: 400 }
    )
  }
} 