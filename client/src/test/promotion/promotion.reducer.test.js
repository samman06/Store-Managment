import React from "react";
import {ADD_PROMOTION, DELETE_PROMOTION, GET_PROMOTIONS} from "../../actions/types";
import promotionReducer from '../../reducers/promotionReducer';

const promotion1 = {_id: 1, code: "code 1", discount: 15, active: false};
const promotion2 = {_id: 2, code: "code 2", discount: 25, active: true};
const promotions = [promotion1, promotion2];
describe("test Promotion Reducer", () => {
    it("return Initial State", () => {
        expect(promotionReducer({promotions: [],}, {})).toEqual({promotions: []});
        expect(promotionReducer(promotions, {})).toEqual(promotions);
    });
    it("Add Promotion to the State", () => {
        expect(promotionReducer({promotions}, {
            type: ADD_PROMOTION,
            payload: promotion1
        })).toEqual({promotions: [...promotions, promotion1]});
    });
    it("Delete Promotion from the State", () => {
        expect(promotionReducer({promotions}, {
            type: DELETE_PROMOTION,
            payload: 1
        })).toEqual({promotions: [promotion2]});
    });
    it("Get All Promotions", () => {
        expect(promotionReducer({promotions: []}, {
            type: GET_PROMOTIONS,
            payload: promotions
        })).toEqual({promotions});
    });
});
