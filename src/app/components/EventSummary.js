import React from 'react';

const EventSummary = ({ event }) => {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold">{event.name}</h2>
      <p className="text-gray-600">{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      {event.image && <img src={event.image} alt={event.name} className="mt-4 rounded" />}
    </div>
  );
};

export default EventSummary;