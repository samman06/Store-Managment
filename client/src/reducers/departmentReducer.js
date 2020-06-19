import {GET_DEPARTMENTS, ADD_DEPARTMENT, DELETE_DEPARTMENT} from "../actions/types";

const initialState = {departments: []};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DEPARTMENTS:
            return {
                departments: action.payload,
            };
        case ADD_DEPARTMENT:
            return {
                departments: [...state.departments, action.payload],
            };
        case DELETE_DEPARTMENT:
            let departments = state.departments.filter(({_id}) => _id !== action.payload);
            return {...state, departments};
        default:
            return state;
    }

}
