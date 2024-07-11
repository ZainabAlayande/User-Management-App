const express = require('express');
const router = express.Router();

// Sample user data 
let users = [
  { id: 1, name: 'Samuel Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  
];


// Get all users
router.get('/users', (req, res) => {
  res.json(users);
});

git remote add origin https://github.com/ZainabAlayande/User-Management-App.git

// Get a single user by ID
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});


// Create a new user
router.post('/register', (req, res) => {
  const { name, age } = req.body;

  // Simple validation
  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required' });
  }

  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);

  res.status(201).json(newUser);
});



// Update an existing user by ID
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  // Simple validation
  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required' });
  }

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.name = name;
  user.age = age;

  res.json(user);
});



// Delete a user by ID
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  res.sendStatus(200);
});


module.exports = router;