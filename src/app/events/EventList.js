import { useState } from 'react';

export default function EventList() {
  const [showForm, setShowForm] = useState(false);

  const handleCreateEventClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <button onClick={handleCreateEventClick}>Créer un événement</button>
      {showForm && <EventForm />}
      {/* ...existing code... */}
    </div>
  );
}
