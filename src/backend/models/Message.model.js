
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
    content: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true,
    },
    attachment: {
      type: String,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create index for conversation queries
MessageSchema.index({ senderId: 1, receiverId: 1 });
MessageSchema.index({ bookingId: 1 });

// Method to mark message as read
MessageSchema.methods.markAsRead = function () {
  this.isRead = true;
  return this.save();
};

module.exports = mongoose.model('Message', MessageSchema);
