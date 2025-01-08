import express from 'express';
import cors from 'cors'; // Import cors
import loginRoutes from './routes/login.routes.js';
import userRoutes from './routes/user.routes.js';
import shopRoutes from './routes/shop.routes.js';
import productRoutes from './routes/product.routes.js';
import dotenv from 'dotenv';

const app = express();

// Enable CORS
dotenv.config();

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*', // Allow requests from the frontend origin or any origin if not specified
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

app.use(express.json());

// Routes
app.use('/api/login', loginRoutes);
app.use('/api/users', userRoutes);
app.use('/api/shops', shopRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
