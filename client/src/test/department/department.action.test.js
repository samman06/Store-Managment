import {addDepartmentAction, getDepartments} from "../../actions/departmentActions";
import thunk from 'redux-thunk';
import configureStore from "redux-mock-store";
import React from "react";
import {CLEAR_ERRORS} from "../../actions/types";

const mockStore = configureStore([thunk]);

describe("test Department Actions", () => {
    it("test getDepartments Action", () => {
        const store = mockStore({});
        store.dispatch(getDepartments());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CLEAR_ERRORS})
    });
    it("test addDepartmentAction Action", () => {
        const store = mockStore({});
        store.dispatch(addDepartmentAction({name: "sadsad"}));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CLEAR_ERRORS})
    });
});
