import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  reservationDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema);