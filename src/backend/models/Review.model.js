
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
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
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
      maxlength: [1000, 'Comment cannot be more than 1000 characters'],
    },
    photos: [
      {
        url: String,
        publicId: String,
      },
    ],
  },
  { timestamps: true }
);

// Prevent duplicate reviews from the same user for the same photographer
ReviewSchema.index({ userId: 1, photographerId: 1 }, { unique: true });

module.exports = mongoose.model('Review', ReviewSchema);
