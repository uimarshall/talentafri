/* eslint-disable import/extensions */
import express from 'express';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import 'dotenv/config';
import connectDB from './config/db.js';
import productRoutes from './routes/api/product.js';
import { errorMiddleware, notFound } from './middlewares/errorsMiddleware.js';

const app = express();

const isAuthenticated = {
  isLogin: true,
  isAdmin: false,
};

app.use((req, res, next) => {
  console.log('====================================');
  console.log('My middleware was called');
  console.log('====================================');
  if (isAuthenticated.isLogin) {
    next(); // This will allow the request to continue to the next middleware
  } else {
    res.json({
      message: 'You are not authorized',
    });
  }
});

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

app.use('/api/v1', productRoutes);

// Custom Error Middleware to handle error
app.use(notFound);
app.use(errorMiddleware);

app.get('/', (req, res) => {
  console.log(req.query.school);
  res.status(200).json({
    message: 'Hello World',
  });
});

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.url);
  res.status(200).json({
    message: 'Data posted',
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
