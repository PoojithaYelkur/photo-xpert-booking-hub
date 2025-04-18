
# PicXpert Backend

This is the backend for the PicXpert photography booking application, built with Node.js, Express, and MongoDB.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Socket.io** - Real-time communication
- **Cloudinary** - Media storage

## Project Structure

```
backend/
├── controllers/       # Route controllers
├── middleware/        # Custom middleware
├── models/            # Mongoose models
├── routes/            # API routes
├── utils/             # Utility functions
├── .env.example       # Environment variables example
├── server.js          # Entry point
└── README.md          # Documentation
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/me` - Update user profile (protected)
- `PUT /api/auth/password` - Change password (protected)

### Photographers

- `GET /api/photographers` - Get all photographers
- `GET /api/photographers/:id` - Get photographer by ID
- `POST /api/photographers` - Create photographer profile (protected - user role)
- `PUT /api/photographers` - Update photographer profile (protected - photographer role)
- `POST /api/photographers/portfolio` - Add portfolio item (protected - photographer role)
- `DELETE /api/photographers/portfolio/:id` - Delete portfolio item (protected - photographer role)

### Bookings

- `GET /api/bookings` - Get user bookings (protected)
- `GET /api/bookings/:id` - Get booking details (protected)
- `POST /api/bookings` - Create a booking (protected - user role)
- `PUT /api/bookings/:id` - Update booking status (protected - photographer role)

### Messages

- `GET /api/messages/:userId` - Get conversation with user (protected)
- `POST /api/messages` - Send a message (protected)
- `PUT /api/messages/read/:userId` - Mark messages as read (protected)

## Real-time Features

Socket.IO is used for real-time messaging between users and photographers.

## Setup Instructions

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your configuration details
3. Install dependencies: `npm install`
4. Run in development mode: `npm run dev`
5. Run in production mode: `npm start`

## Authentication Flow

1. User registers or logs in
2. Server validates credentials and returns JWT token
3. Client stores token in localStorage
4. Client includes token in Authorization header for protected routes

## Role-Based Access

The application implements role-based access control:

- **User** - Can book photographers, message photographers, and leave reviews
- **Photographer** - Can create/update profile, manage portfolio, and respond to bookings
- **Admin** (for future use) - Can manage all resources

## Data Models

- **User** - Basic user information and authentication
- **Photographer** - Photographer profile details
- **Portfolio** - Photographer's portfolio items
- **Booking** - Booking information between users and photographers
- **Review** - User reviews for photographers
- **Message** - Messages between users and photographers
