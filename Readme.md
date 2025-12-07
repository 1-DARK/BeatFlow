# BeatFlow

A modern music streaming application with real-time chat functionality built with React, Express.js, and MongoDB.

## Features

- **Music Streaming**: Stream your favorite songs with a modern audio player
- **Real-time Chat**: Connect with friends while listening to music
- **User Authentication**: Secure authentication powered by Clerk
- **Responsive Design**: Beautiful UI that works on all devices
- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **Admin Dashboard**: Manage songs, albums, and users
- **Music Discovery**: Browse albums and discover new music
- **Audio Controls**: Play, pause, skip, and volume control
- **Friends Activity**: See what your friends are listening to
- **Real-time Updates**: Socket.io for live interactions

## Tech Stack

### Frontend

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible UI components
- **React Router** - Client-side routing
- **Zustand** - State management
- **Clerk** - Authentication
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client

### Backend

- **Node.js & Express** - Server framework
- **MongoDB & Mongoose** - Database
- **Socket.io** - Real-time communication
- **Clerk Express** - Authentication middleware
- **Cloudinary** - Image and audio storage
- **Express FileUpload** - File upload handling
- **Node-cron** - Scheduled tasks
- **CORS** - Cross-origin resource sharing

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Clerk** account for authentication
- **Cloudinary** account for media storage

## Environment Variables

Create `.env` files in both frontend and backend directories:

### Backend (.env)

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

### Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000/api
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/1-DARK/BeatFlow.git
cd BeatFlow
```

### 2. Install dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Set up environment variables

Create `.env` files in both `backend` and `frontend` directories with the required variables (see Environment Variables section).

### 4. Seed the database (optional)

```bash
# From the backend directory
npm run seeds:songs
npm run seeds:albums
```

### 5. Start the development servers

#### Option 1: Run both servers simultaneously

```bash
# From the root directory
npm run dev
```

#### Option 2: Run servers separately

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 6. Open your browser

Navigate to `http://localhost:3000` to see the application.

## Project Structure

```
BeatFlow/
├── backend/
│   ├── src/
│   │   ├── controller/          # Route controllers
│   │   ├── lib/                 # Database, Cloudinary, Socket configs
│   │   ├── middleware/          # Authentication middleware
│   │   ├── models/              # MongoDB models
│   │   ├── routes/              # API routes
│   │   ├── seeds/               # Database seeders
│   │   └── index.js             # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── layout/              # Layout components
│   │   ├── pages/               # Page components
│   │   ├── store/               # Zustand stores
│   │   └── App.tsx              # Main App component
│   └── package.json
└── package.json                 # Root package.json
```

## Available Scripts

### Root Level

- `npm run build` - Build the entire application
- `npm start` - Start production server

### Backend

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run seeds:songs` - Seed songs data
- `npm run seeds:albums` - Seed albums data

### Frontend

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features Implementation

### Authentication

- Integrated with Clerk for secure user authentication
- Protected routes and middleware
- User session management

### Real-time Features

- Socket.io implementation for live chat
- Real-time friend activity updates
- Live music synchronization (if implemented)

### File Management

- Cloudinary integration for audio and image storage
- Express FileUpload for handling file uploads
- Automatic cleanup of temporary files via cron jobs

### Database

- MongoDB with Mongoose ODM
- User, Song, Album, and Message models
- Efficient data relationships and queries

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
