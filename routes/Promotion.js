const express = require('express');
const promotionRouter = express.Router();
const Promotion = require("../controllers/Promotion");

//get all promotions
promotionRouter.get('/', async (req, res) => await Promotion.getAllPromotions(req, res));

//add new promotion
promotionRouter.post('/', async (req, res) => await Promotion.addNewPromotion(req, res));

// update promotion by id
promotionRouter.put('/:id', async (req, res) => await Promotion.updatePromotionById(req, res));

//delete promotion by id
promotionRouter.delete('/:id', async (req, res) => await Promotion.deletePromotionById(req, res));

module.exports = promotionRouter;
