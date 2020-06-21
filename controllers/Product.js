const ProductModel = require('../models/Products');
const DepartmentModel = require('../models/Departments');
const PromotionModel = require('../models/Promotions');
const validation = require('../validation/inputsValidation');

class Products {
    async getAllProducts(req, res) {
        try {

            let products = await ProductModel.find()
                .populate('promotionId', ['code', "active", "discount"])
                .populate("departmentId", ["name"]);
            return res.json(products)
        } catch (e) {
            return res.json({msg: 'error in getting data'})
        }
    }

    async addProduct(req, res) {
        const {name, price, departmentId, promotionId} = req.body;
        const {errors, isValid} = validation.validateProductInputs(name, price);
        if (!isValid) return res.json({errors});
        try {
            let department = await DepartmentModel.findById(departmentId);
            if (!department) return res.json({errors: {departmentId: "department doesn't exists"}});
            let promotion = await PromotionModel.findById(promotionId);
            if (!promotion) return res.json({errors: {promotionId: "promotion doesn't exists"}});
            let product = await ProductModel.findOne({name, departmentId});
            if (product) return res.json({errors: {name: 'product already exists'}});
            product = new ProductModel({name, price, departmentId, promotionId});
            product = await product.save();
            product = await ProductModel.populate(product, {path: "departmentId"});
            product = await ProductModel.populate(product, {path: "promotionId"});
            return res.json({product})
        } catch (err) {
            res.json({err})
        }
    }

    async updateProduct(req, res) {
        const {name, price, departmentId, promotionId} = req.body;
        const {errors, isValid} = validation.validateProductInputs(name, price);
        if (!isValid) return res.json({errors});
        try {
            let department = await DepartmentModel.findById(departmentId);
            if (!department) return res.json({errors: {departmentId: "department doesn't exists"}});
            let promotion = await PromotionModel.findById(promotionId);
            if (!promotion) return res.json({errors: {promotionId: "promotion doesn't exists"}});
            let product = await ProductModel.findOne({_id: req.params.id});
            if (product && product.name === name && String(product.departmentId) === departmentId && product.price === Number(price) && String(product.promotionId) === promotionId) {
                return res.json({errors: {name: 'product already exists'}});
            }
            await ProductModel.updateOne({_id: req.params.id}, {$set: {name, price, departmentId, promotionId}});
            return res.json({message: 'updated'})
        } catch (err) {
            return res.json({err})
        }
    }

    async removeProduct(req, res) {
        try {
            await ProductModel.findByIdAndRemove(req.params.id);
            return res.json({message: 'deleted'})
        } catch (err) {
            return res.json({err})
        }
    }
}

const Product = new Products();
module.exports = Product;
