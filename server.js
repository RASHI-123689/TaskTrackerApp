const express = require('express');
const app = express(); 
const port = 5000; 
app.use(express.json());
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

// Start Express server
app.listen(5000, () => console.log('Server running on port 5000'));


app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
let tasks = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Express API", completed: false },
    { id: 3, text: "Connect Frontend to Backend", completed: false }
];


// Backend Health Check

app.get('/', (req, res) => {
    res.send('Hello from Express Backend. Backend is up and running.')
});

// GET all tasks

app.get ('/api/tasks', (req, res) => {
    res.json(tasks);
});