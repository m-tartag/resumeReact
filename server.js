const express = require('express');
const chalk = require('chalk');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 4000;

// Initialize Express
const app = express();

// Connect Database
connectDB();

// Init Middleware (Built-in Body Parser)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API Connected');
});

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () =>
  console.log(chalk.yellow.inverse(`Server Connected [Port: ${PORT}])`))
);
