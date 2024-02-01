const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
  {
    employeeId: {
      type: Number,
      required: [true, 'Please enter a Employee Id'],
    },
    name: {
      type: String,
      required: [true, 'Please enter a Employee name'],
    },
    grade: {
      type: Number,
      required: false,
    },
    tag: {
      type: String,
      required: false,
    },
    joiningDate: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
