const express = require('express');
const app = express();  

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
];

// Get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Get a single user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// Add a new user (For simplicity, using req.query in this example)
app.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.query.name };
    users.push(newUser);
    res.json(newUser);
});

// Update a user
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    user.name = req.query.name;
    res.json(user);
});

// Delete a user
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: 'User deleted' });
});


// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
