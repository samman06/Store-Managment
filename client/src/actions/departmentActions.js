import {ADD_DEPARTMENT, CLEAR_ERRORS, DELETE_DEPARTMENT, GET_DEPARTMENTS, GET_ERRORS} from "./types";
import axios from "axios";

let URI = "http://localhost:4000";
if (process.env.NODE_ENV === "production") {
    URI = "https://trufla.herokuapp.com"
}
export const getDepartments = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
    try {
        const {data} = await axios.get(`${URI}/departments/`);
        return dispatch({type: GET_DEPARTMENTS, payload: data});
    } catch (e) {
        return dispatch({type: GET_DEPARTMENTS, payload: []});
    }
};
export const addDepartmentAction = (departmentData) => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
    try {
        const {data} = await axios.post(`${URI}/departments/`, departmentData);
        console.log(data);
        if (data.department) return dispatch({type: ADD_DEPARTMENT, payload: data.department});
        else return dispatch({type: GET_ERRORS, payload: data.errors});
    } catch (e) {
        console.log('data will be send later');
    }
};
export const deleteDepartmentAction = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`${URI}/departments/${id}`);
        if (data.message) return dispatch({type: DELETE_DEPARTMENT, payload: id})
    } catch (e) {
        console.log("Data Not Deleted");
    }
};
export const editDepartmentAction = (id, categoryData) => async (dispatch) => {
    try {
        let {data} = await axios.put(`${URI}/departments/${id}`, categoryData);
        if (!data.message) dispatch({type: GET_ERRORS, payload: data.errors});
        else await dispatch(getDepartments());
        return data
    } catch (e) {
        console.log('data not edited');
    }
};

export const clearErrors = () => (dispatch) => dispatch({type: CLEAR_ERRORS});
