import express from 'express';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import 'dotenv/config';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.info(
    `${chalk.green.bold('✔️')} 👍 Server running in ${chalk.magenta.bold(process.env.NODE_ENV)} mode on port ${chalk.blueBright.bold(PORT)}`
  );
});
