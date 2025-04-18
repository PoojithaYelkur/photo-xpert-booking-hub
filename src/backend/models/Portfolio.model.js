
const mongoose = require('mongoose');

const PortfolioItemSchema = new mongoose.Schema(
  {
    photographerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photographer',
      required: true,
    },
    type: {
      type: String,
      enum: ['image', 'video'],
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      maxlength: [200, 'Caption cannot be more than 200 characters'],
    },
    tags: [String],
    category: {
      type: String,
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
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PortfolioItem', PortfolioItemSchema);
