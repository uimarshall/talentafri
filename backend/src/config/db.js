import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const MONGO_URI_CONN = process.env.NODE_ENV === 'PRODUCTION' ? process.env.MONGO_URI : process.env.MONGO_URI_LOCAL;

    const conn = await mongoose.connect(MONGO_URI_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info(`MongoDb Database Successfully Connected with HOST: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process with failure message if connection fails.
  }
};

// const dbConfig = {
//   development: 'mongodb://localhost:27017/local-dev',
//   production: 'mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority',
// };

// const environment = process.env.NODE_ENV || 'development'; // Set your environment variable

// mongoose
//   .connect(dbConfig[environment], { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

export default connectDb;
