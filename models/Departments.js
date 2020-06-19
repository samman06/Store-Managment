const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name: String,
});

const Departments = mongoose.model('departments', DepartmentSchema);
module.exports = Departments;
