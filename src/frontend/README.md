
# PicXpert Frontend

This is the frontend for the PicXpert photography booking application, built with React, Tailwind CSS, and more.

## Tech Stack

- **React** - UI library
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Shadcn/UI** - UI component library
- **React Hook Form** - Form handling
- **Zod** - Form validation
- **Context API** - State management
- **Axios** - API client
- **Cloudinary** - Media uploads
- **Socket.io-client** - Real-time communication

## Project Structure

```
frontend/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   │   ├── layout/   # Layout components
│   │   ├── ui/       # UI components
│   │   ├── user/     # User-specific components
│   │   └── photographer/ # Photographer-specific components
│   ├── context/      # Context providers
│   ├── hooks/        # Custom hooks
│   ├── lib/          # Utility functions
│   ├── pages/        # Route components
│   │   ├── auth/     # Authentication pages
│   │   ├── user/     # User pages
│   │   └── photographer/ # Photographer pages
│   ├── services/     # API services
│   ├── types/        # TypeScript types
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── .env.example      # Environment variables example
└── README.md         # Documentation
```

## Key Features

### Authentication
- Registration with role selection (User/Photographer)
- Login/logout functionality
- Protected routes based on role

### User Features
- Search and filter photographers
- View photographer profiles and portfolios
- Book photographers
- Manage bookings
- Chat with photographers
- Leave reviews

### Photographer Features
- Create/edit profile
- Manage availability and pricing
- Upload portfolio items
- Respond to booking requests
- Chat with clients
- View reviews

## Pages

### Public Pages
- Home - Landing page with features and CTAs
- About - Information about the platform
- Contact - Contact form
- Login/Register - Authentication pages

### User Pages
- UserHome - Search and browse photographers
- PhotographerDetail - View photographer profiles
- Booking - Book a photographer
- Orders - View booking history
- Chat - Message photographers

### Photographer Pages
- Dashboard - Overview of bookings, earnings, etc.
- Profile - Create/edit profile
- Portfolio - Manage portfolio items
- Bookings - Manage booking requests
- Chat - Message clients

## Component Hierarchy

- **App**
  - **AuthProvider** - Authentication context
  - **Navbar** - Navigation
  - **Routes**
    - **Home** - Landing page
    - **Auth Routes** - Login, Register
    - **User Routes** - User pages (protected)
    - **Photographer Routes** - Photographer pages (protected)
  - **Footer** - Footer

## Setup Instructions

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your configuration details
3. Install dependencies: `npm install`
4. Run in development mode: `npm run dev`
5. Build for production: `npm run build`

## Environment Variables

- `VITE_API_URL` - Backend API URL
- `VITE_CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `VITE_CLOUDINARY_UPLOAD_PRESET` - Cloudinary upload preset

## Authentication Flow

1. User registers or logs in
2. Server validates credentials and returns JWT token
3. Client stores token in localStorage
4. AuthContext provides authentication state to the app
5. Protected routes check for authentication before rendering

## Styling

The application uses Tailwind CSS for styling, with a consistent design system implemented using shadcn/ui components. The color palette is defined in the tailwind.config.js file.
