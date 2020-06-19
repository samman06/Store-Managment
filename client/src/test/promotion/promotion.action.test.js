import {addPromotionAction, getPromotionsAction} from "../../actions/promotionActions";
import thunk from 'redux-thunk';
import configureStore from "redux-mock-store";
import React from "react";
import {CLEAR_ERRORS} from "../../actions/types";

const mockStore = configureStore([thunk]);

describe("test Promotion Actions", () => {
    it("test getPromotions Action", () => {
        const store = mockStore({});
        store.dispatch(getPromotionsAction());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CLEAR_ERRORS})
    });
    it("test addPromotionAction Action", () => {
        const store = mockStore({});
        store.dispatch(addPromotionAction({name: "sadsad"}));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CLEAR_ERRORS})
    });
});
