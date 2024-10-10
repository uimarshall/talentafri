import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info(`MongoDb Database Successfully Connected with HOST: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process with failure message if connection fails.
  }
};

export default connectDb;
