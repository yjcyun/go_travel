const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Uncaught exception
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEIPTION!⚡ Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
})

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful'));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// Unhandled rejection
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION!⚡ Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  })
});