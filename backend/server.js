const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Employee = require('./models/employeModels');
const cors = require('cors');

app.use(cors());

// using middleware -> to understand middle warer
app.use(express.json());

require('dotenv').config();

// declaring routes
app.get('/', (req, res) => {
  res.send('hello: Node API');
});

// to get all employee
app.get('/employee', async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// sending data into a databse
app.post('/setEmployee', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// to get products based on id in the url
app.get('/employee/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update a product
app.put('/employee/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // we cannot find any product from database
    if (!employee) {
      return res.status(404).json({ message: 'cannot find any product' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}`
  )
  .then(() => {
    console.log('connected to mongodb');
    app.listen(3000, () => {
      console.log('Mode API is running on port 3000');
    });
  })
  .catch((error) => {
    console.log(error);
  });
