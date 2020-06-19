const express = require('express');
const departmentRouter = express.Router();
const Department = require("../controllers/Department");

//get all departments
departmentRouter.get('/', async (req, res) => await Department.getAllDepartments(req, res));

//add new department
departmentRouter.post('/', async (req, res) => await Department.addNewDepartment(req, res));

// update department by id
departmentRouter.put('/:id', (req, res) => Department.updateDepartmentById(req, res));

//delete department by id
departmentRouter.delete('/:id', async (req, res) => await Department.deleteDepartmentById(req, res));


module.exports = departmentRouter;
