
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const photographerRoutes = require('./routes/photographer.routes');
const bookingRoutes = require('./routes/booking.routes');
const messageRoutes = require('./routes/message.routes');
const { authMiddleware } = require('./middleware/auth.middleware');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/photographers', photographerRoutes); // Public route with some protected endpoints
app.use('/api/bookings', authMiddleware, bookingRoutes);
app.use('/api/messages', authMiddleware, messageRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../../build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const server = app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );

    // Set up Socket.io for real-time messaging
    const io = require('socket.io')(server, {
      cors: {
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST'],
      },
    });

    io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);

      // Handle joining a chat room
      socket.on('join_room', (roomId) => {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room: ${roomId}`);
      });

      // Handle new messages
      socket.on('send_message', (data) => {
        console.log('Message received:', data);
        socket.to(data.roomId).emit('receive_message', data);
      });

      // Handle disconnection
      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });
  })
  .catch((err) => console.error('Failed to connect to MongoDB:', err));
