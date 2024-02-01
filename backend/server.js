const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Employee = require('./models/employeModels');

// using middleware -> to understand middle warer
app.use(express.json());

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

/*
// to get products based on id in the url
app.get('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// update a product
app.put('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // we cannot find any product from database
    if (!product) {
      return res.status(404).json({ message: 'cannot find any product' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a product
app.delete('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'cannot find any product' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

mongoose
  .connect('mongodb+srv://Adhithiyan:quent.work@cluster.44fetee.mongodb.net/')
  .then(() => {
    console.log('connected to mongodb');
    app.listen(3000, () => {
      console.log('Mode API is running on port 3000');
    });
  })
  .catch((error) => {
    console.log(error);
  });
