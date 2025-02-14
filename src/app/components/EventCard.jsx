import Link from 'next/link';

export function EventCard({ events }) {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <div key={event._id} className="p-6 border rounded-lg shadow-lg bg-gray-800 text-white hover:shadow-xl transition-shadow duration-300">
          {event.image && <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-t-lg" />}
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-400 mb-1">{event.date}</p>
            <p className="text-gray-400 mb-1">{event.location}</p>
            <p className="mt-2 text-gray-300">{event.description}</p>
            <Link href={`/events/${event._id}`} legacyBehavior>
              <a className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300">
                Plus de détails
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}