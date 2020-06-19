const departmentModel = require('../models/Departments');
const ProductModel = require('../models/Products');
const validation = require('../validation/inputsValidation');

class Departments {
    async getAllDepartments(req, res) {
        try {
            const departments = await departmentModel.find();
            return res.json(departments)
        } catch (e) {
            return res.json({msg: 'error in getting data'})
        }
    }

    async addNewDepartment(req, res) {
        const {name} = req.body;
        const {errors, isValid} = validation.validateDepartmentInputs(name);
        if (!isValid) return res.json({errors});
        try {
            let department = await departmentModel.findOne({name});
            if (department) return res.json({errors: {name: 'department already exists'}});
            department = new departmentModel({name});
            department = await department.save();
            return res.json({department})
        } catch (err) {
            res.json({err})
        }
    }

    async updateDepartmentById(req, res) {
        const {name} = req.body;
        try {
            let department = await departmentModel.findOne({name});
            if (department) return res.json({errors: {name: 'department already exists'}});
            await departmentModel.updateOne({_id: req.params.id}, {$set: {name: name},});
            return res.json({message: 'updated'})
        } catch (err) {
            return res.json({err})
        }
    }

    async deleteDepartmentById(req, res) {
        try {
            let {_id} = await departmentModel.findByIdAndRemove(req.params.id);
            await ProductModel.remove({departmentId:_id});
            return res.json({message: 'deleted'})
        } catch (err) {
            return res.json({error:"not delete"})
        }
    }

}

const Department = new Departments();
module.exports = Department;
