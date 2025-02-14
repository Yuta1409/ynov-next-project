import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-3xl font-semibold mb-4">Créer un nouvel événement</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Nom</label>
            <input type="text" name="name" className="w-full px-4 py-2 rounded bg-gray-700 text-white" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Description</label>
            <textarea name="description" className="w-full px-4 py-2 rounded bg-gray-700 text-white" required></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Date</label>
            <input type="date" name="date" className="w-full px-4 py-2 rounded bg-gray-700 text-white" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Lieu</label>
            <input type="text" name="location" className="w-full px-4 py-2 rounded bg-gray-700 text-white" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Image URL</label>
            <input type="text" name="image" className="w-full px-4 py-2 rounded bg-gray-700 text-white" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Places disponibles</label>
            <input type="number" name="availableSeats" className="w-full px-4 py-2 rounded bg-gray-700 text-white" required />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">Annuler</button>
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300">Créer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;