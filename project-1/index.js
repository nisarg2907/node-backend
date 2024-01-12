const express = require("express");
const app = express();
const port = 3001;

// Middleware to parse JSON in request body
app.use(express.json());

// Sample data (can be replaced with a database)
let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// Route to get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Route to get a specific user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Route to create a new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.unshift(newUser);
  res.status(201).json(newUser);
});

// Route to update a user by ID
app.patch("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUserData = req.body;

  users = users.map((user) =>
    user.id === userId ? { ...user, ...updatedUserData } : user
  );

  res.json({ message: "User updated successfully" });
});

// Route to delete a user by ID
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.status(204).end();
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
