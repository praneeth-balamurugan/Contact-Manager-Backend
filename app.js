const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
var cors=require('cors');
app.use(cors());
const userRoutes = require('./routes/user-route');  
app.use(express.json()); // Middleware to parse JSON requests
app.get('/', (req, res) => {
  res.send('running!');
});

app.use(userRoutes); // Use user routes

// Connect to MongoDB
async function connectdb() {
  try {
    const CONNECTION_STRING = 'mongodb+srv://praneeth:praneeth2004@cluster0.hplvp4p.mongodb.net/contact-manager?retryWrites=true&w=majority';
    await mongoose.connect(CONNECTION_STRING);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
}

connectdb();




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
