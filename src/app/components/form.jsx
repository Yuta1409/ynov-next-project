import React, { useState } from 'react';

const Form = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: '',
    paymentDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Téléphone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>

       
      {type === 'reservation' && (
        <>
          <div>
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div>
            <label>Heure:</label>
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          </div>
        </>
      )}
      {type === 'payment' && (
        <div>
          <label>Détails de paiement:</label>
          <input type="text" name="paymentDetails" value={formData.paymentDetails} onChange={handleChange} required />
        </div>
      )}
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Form;