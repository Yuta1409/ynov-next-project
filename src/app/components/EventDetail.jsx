import Link from 'next/link';

export function EventDetail({ event }) {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-gray-800 text-white">
      {event.image && <img src={event.image} alt={event.name} className="w-full h-64 object-cover rounded-t-lg" />}
      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-4">{event.name}</h2>
        <p className="text-gray-400 mb-2">{event.date}</p>
        <p className="text-gray-400 mb-2">{event.location}</p>
        <p className="mt-4 text-gray-300">{event.description}</p>
        <Link href="/events" legacyBehavior>
          <a className="mt-6 inline-block bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300">
            Retour aux événements
          </a>
        </Link>
        <Link href={`/reservations/${event._id}`} legacyBehavior>
          <a className="mt-6 inline-block bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300">
            Réserver une place
          </a>
        </Link>
      </div>
    </div>
  );
}