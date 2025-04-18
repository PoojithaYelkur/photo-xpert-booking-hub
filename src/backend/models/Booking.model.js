
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    photographerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photographer',
      required: true,
    },
    eventType: {
      type: String,
      required: [true, 'Event type is required'],
      enum: [
        'wedding',
        'engagement',
        'birthday',
        'corporate',
        'family',
        'portrait',
        'product',
        'real estate',
        'other',
      ],
    },
    eventDate: {
      type: Date,
      required: [true, 'Event date is required'],
    },
    startTime: {
      type: String,
      required: [true, 'Start time is required'],
    },
    endTime: {
      type: String,
    },
    duration: {
      type: Number, // Duration in hours
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    notes: {
      type: String,
      maxlength: [500, 'Notes cannot be more than 500 characters'],
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'refunded'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['credit_card', 'paypal', 'cash', 'other'],
    },
    paymentId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
