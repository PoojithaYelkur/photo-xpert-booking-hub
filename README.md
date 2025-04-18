
# PicXpert - Photography Booking Platform

PicXpert is a MERN (MongoDB, Express, React, Node.js) stack application that connects photographers with clients looking to book photography services. The platform features role-based access, real-time chat, portfolio management, and a booking system.

## Project Structure

The project is organized into two main directories:

- **frontend/** - React.js client application
- **backend/** - Node.js + Express server with MongoDB

## Features

### Authentication
- User registration with role selection (User/Photographer)
- JWT-based authentication
- Protected routes based on user roles

### User Features
- Search and filter photographers by event type, price, location, etc.
- View photographer profiles and portfolios
- Book photography sessions
- Real-time chat with photographers
- Manage bookings and leave reviews

### Photographer Features
- Create and manage professional profile
- Set availability and pricing
- Upload and showcase portfolio
- Manage booking requests
- Chat with clients
- View earnings and booking statistics

## Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- React Router DOM
- React Hook Form + Zod
- Context API for state management
- Axios for API requests
- Socket.io for real-time chat

### Backend
- Node.js + Express
- MongoDB with Mongoose ODM
- JWT for authentication
- Socket.io for real-time communication
- Multer + Cloudinary for file uploads
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- NPM or Yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/picxpert.git
cd picxpert
```

2. Install dependencies for frontend:
```bash
cd frontend
npm install
```

3. Install dependencies for backend:
```bash
cd ../backend
npm install
```

4. Configure environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Fill in your MongoDB connection string, JWT secret, and other required variables

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to http://localhost:8080

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Photographers
- `GET /api/photographers` - Get all photographers
- `GET /api/photographers/:id` - Get photographer details
- `POST /api/photographers` - Create photographer profile
- `PUT /api/photographers` - Update photographer profile
- `POST /api/photographers/portfolio` - Add portfolio item

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create a booking
- `PUT /api/bookings/:id` - Update booking status

### Messages
- `GET /api/messages/:userId` - Get conversation
- `POST /api/messages` - Send a message

## Deployment

### Frontend
The frontend can be deployed to Vercel or any other static hosting provider.

### Backend
The backend can be deployed to Render, Heroku, or any other Node.js hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
