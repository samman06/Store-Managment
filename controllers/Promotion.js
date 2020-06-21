const promotionModel = require('../models/Promotions');
const ProductModel = require('../models/Products');
const validation = require('../validation/inputsValidation');

class Promotions {
    async getAllPromotions(req, res) {
        try {
            const promotions = await promotionModel.find();
            return res.json(promotions)
        } catch (e) {
            return res.json({msg: 'error in getting data'})
        }
    }

    async addNewPromotion(req, res) {
        const {code, active, discount} = req.body;
        const {errors, isValid} = validation.validatePromotionInputs(code, discount);
        if (!isValid) return res.json({errors});
        try {
            let promotion = await promotionModel.findOne({code});
            if (promotion) return res.json({errors: {code: 'Promotion already exists'}});
            promotion = new promotionModel({code, active, discount});
            promotion = await promotion.save();
            return res.json({promotion})
        } catch (err) {
            res.json({err})
        }
    }

    async updatePromotionById(req, res) {
        const {code, active, discount} = req.body;
        const {errors, isValid} = validation.validatePromotionInputs(code, discount);
        if (!isValid) return res.json({errors});
        try {
            let promotion = await promotionModel.findOne({code});
            if (promotion && String(promotion._id) !== req.params.id)
                return res.json({errors: {code: 'Promotion already exists'}});
            await promotionModel.updateOne({_id: req.params.id}, {$set: {code, active, discount}});
            return res.json({message: 'updated'})
        } catch (err) {
            return res.json({err})
        }
    }

    async deletePromotionById(req, res) {
        try {
            let products = await ProductModel.find({promotionId: req.params.id});
            if (products.length > 0) return res.json({errors: {message: "You can't delete this promotion because it is related to a products"}});
            await promotionModel.findByIdAndRemove(req.params.id);
            return res.json({message: 'deleted'})
        } catch (err) {
            return res.json({err})
        }
    }
}

const Promotion = new Promotions();
module.exports = Promotion;
