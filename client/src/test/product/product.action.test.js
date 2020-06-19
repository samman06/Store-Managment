import {addProductAction, getProductsAction} from "../../actions/productActions";
import thunk from 'redux-thunk';
import configureStore from "redux-mock-store";
import React from "react";
import {CLEAR_ERRORS} from "../../actions/types";

const mockStore = configureStore([thunk]);

describe("test Product Actions", () => {
    it("test getProducts Action", () => {
        const store = mockStore({});
        store.dispatch(getProductsAction());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CLEAR_ERRORS})
    });
    it("test addProductAction Action", () => {
        const store = mockStore({});
        store.dispatch(addProductAction({name: "sadsad"}));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CLEAR_ERRORS})
    });
});
