const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: [true, 'Please enter a Employee Id'],
    },
    name: {
      type: String,
      required: [true, 'Please enter a Employee name'],
    },
    grade: {
      type: Number,
      required: [true, 'Please enter a grade'],
    },
    DOB: {
      type: String,
      required: [true, 'Please enter a DOB'],
    },
    location: {
      type: String,
      required: [true, 'Please enter a location'],
    },
    remote: {
      type: Boolean,
      required: [true, 'Please enter if remote work'],
    },
    projectDetails: {
      type: String,
      required: [true, 'Please enter a projectDetails'],
    },
    billing: {
      type: Number,
      required: [true, 'Please enter a billing'],
    },
    language: {
      type: String,
      required: [true, 'Please enter a language'],
    },
    salary: {
      type: Number,
      required: [true, 'Please enter a salary'],
    },
    remarks: {
      type: String,
      required: [true, 'Please enter a salary'],
    },
    joinDate: {
      type: String,
      required: [true, 'Please enter joinDate'],
    },
    endDate: {
      type: String,
      required: [true, 'Please enter a endDate'],
    },
    designation: {
      type: String,
      required: [true, 'Please enter a designation'],
    },
    projectName: {
      type: String,
      required: [true, 'Please enter a projectName'],
    },
    projectId: {
      type: String,
      required: [true, 'Please enter a projectId'],
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
