/* eslint-disable import/extensions */
import express from 'express';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import 'dotenv/config';
import connectDB from './config/db.js';
import productRoutes from './routes/api/product.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Connect to MongoDB Database

connectDB();

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes Middleware

app.use('/api/v1/product', productRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

app.get('/api/v1/user', (req, res) => {
  res.status(200).json({
    user: {
      name: 'Debo',
      email: 'Debo@example.com',
      id: 1,
      isAdmin: false,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.info(
    `${chalk.green.bold('✔️')} 👍 Server running in ${chalk.magenta.bold(process.env.NODE_ENV)} mode on port ${chalk.blueBright.bold(PORT)}`
  );
});
