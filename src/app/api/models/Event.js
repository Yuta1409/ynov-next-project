import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
