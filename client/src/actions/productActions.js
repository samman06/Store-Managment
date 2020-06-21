import axios from "axios";
import {
    CLEAR_ERRORS,
    DELETE_PRODUCT,
    GET_ERRORS,
    GET_PRODUCTS,
    ADD_PRODUCT,
    SEARCH_FOR_PRODUCT,
    DEPARTMENT_FILTER_PRODUCT,
    PROMOTION_FILTER_PRODUCT
} from "./types";

const URI = "http://localhost:4000";
export const getProductsAction = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
    try {
        const {data} = await axios.get(`${URI}/products/`);
        return dispatch({type: GET_PRODUCTS, payload: data});
    } catch (e) {
        return dispatch({type: GET_PRODUCTS, payload: []});
    }
};
export const addProductAction = (productData) => async (dispatch) => {
    try {
        dispatch({type: CLEAR_ERRORS});
        const {data} = await axios.post(`${URI}/products/`, productData);
        if (data.product) dispatch({type:ADD_PRODUCT,payload:data.product});
        else dispatch({type: GET_ERRORS, payload: data.errors});
        return data.product
    } catch (e) {
        console.log('data will be send later');
    }
};
export const deleteProductAction = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`${URI}/products/${id}`);
        if (data.message) return dispatch({type: DELETE_PRODUCT, payload: id})
    } catch (e) {
        console.log('data not deleted');
    }
};
export const editProductAction = (id, productData) => async (dispatch) => {
    try {
        let {data} = await axios.put(`${URI}/products/${id}`, productData);
        if (!data.message) dispatch({type: GET_ERRORS, payload: data.errors});
        else await dispatch(getProductsAction());
        return data.message
    } catch (e) {
        console.log('data not edited');
    }
};


export const searchAction = (name) => async (dispatch) => dispatch({type: SEARCH_FOR_PRODUCT, payload: name});
export const departmentFilterAction = (id) => async (dispatch) => dispatch({type: DEPARTMENT_FILTER_PRODUCT, payload: id});
export const promotionFilterAction = (id) => async (dispatch) => dispatch({type: PROMOTION_FILTER_PRODUCT, payload: id});


