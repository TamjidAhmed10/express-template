import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import errorHandler from './app/middlewares/errorHandler'; // Import the error handling middleware
import dotenv from 'dotenv'; // Import the dotenv package
import cors from "cors"
import connectDB from "./config/database";

dotenv.config(); // Load variables from .env file
connectDB(); // Invoke the connectDB function

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(express.json());
app.use(cors())
// Error handling middleware
app.use(errorHandler); // Use the imported error handling middleware

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
