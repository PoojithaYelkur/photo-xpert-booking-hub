
const mongoose = require('mongoose');

const PhotographerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bio: {
      type: String,
      required: [true, 'Bio is required'],
      maxlength: [500, 'Bio cannot be more than 500 characters'],
    },
    nativePlace: {
      type: String,
      required: [true, 'Native place is required'],
      trim: true,
    },
    languages: {
      type: [String],
      required: [true, 'At least one language is required'],
    },
    pricing: {
      hourly: {
        type: Number,
        required: [true, 'Hourly rate is required'],
      },
      fullDay: {
        type: Number,
        required: [true, 'Full day rate is required'],
      },
      custom: [
        {
          name: String,
          price: Number,
          description: String,
        },
      ],
    },
    availability: {
      dates: [Date],
      locations: [String],
    },
    specialties: {
      type: [String],
      enum: [
        'wedding',
        'portrait',
        'commercial',
        'event',
        'family',
        'fashion',
        'product',
        'real estate',
        'sports',
        'wildlife',
        'other',
      ],
    },
    equipment: [String],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    coverPhoto: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

// Virtual for photographer name
PhotographerSchema.virtual('name').get(function () {
  return this._name;
}).set(function (name) {
  this._name = name;
});

// Virtual for photographer email
PhotographerSchema.virtual('email').get(function () {
  return this._email;
}).set(function (email) {
  this._email = email;
});

// Calculate average rating when updated
PhotographerSchema.methods.updateRating = function (newRating) {
  const currentTotalScore = this.rating * this.totalReviews;
  this.totalReviews += 1;
  this.rating = (currentTotalScore + newRating) / this.totalReviews;
};

module.exports = mongoose.model('Photographer', PhotographerSchema);
