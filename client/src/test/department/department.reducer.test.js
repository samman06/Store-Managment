import React from "react";
import {ADD_DEPARTMENT, DELETE_DEPARTMENT, GET_DEPARTMENTS} from "../../actions/types";
import departmentReducer from '../../reducers/departmentReducer';

const department = {_id: 1, name: "depart 1"};
const departments = [department];
describe("test Department Reducer", () => {
    it("expect Initial State", () => {
        expect(departmentReducer({departments: []}, {})).toEqual({departments: []});
        expect(departmentReducer(departments, {})).toEqual(departments);
    });
    it("expect add Department to the State", () => {
        expect(departmentReducer({departments}, {
            type: ADD_DEPARTMENT,
            payload: department
        })).toEqual({departments: [department, department]});
    });
    it("expect Delete Department from the State", () => {
        expect(departmentReducer({departments}, {
            type: DELETE_DEPARTMENT,
            payload: 1
        })).toEqual({departments: []});
    });
    it("expect Get All Departments", () => {
        expect(departmentReducer({departments: []}, {
            type: GET_DEPARTMENTS,
            payload: departments
        })).toEqual({departments});
    });
});
