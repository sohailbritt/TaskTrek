const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./Routes/taskRoutes.js');

const app = express();

//connect to server
mongoose.connect(process.env.MONGODB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Correct order
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', taskRoutes);
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(process.env.MONGODB);
})



