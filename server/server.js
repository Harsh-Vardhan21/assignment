// Import modules using ES Modules syntax
import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database
connectDB();

// Create an instance of Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Serve static files from the React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'client', 'build')));

// API routes
app.use('/api/users', userRoutes); // Mount user routes

// Handle other requests that don't match the API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Define the port to listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
