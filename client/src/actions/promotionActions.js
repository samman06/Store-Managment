import axios from "axios";
import {GET_PROMOTIONS,ADD_PROMOTION, CLEAR_ERRORS, DELETE_PROMOTION, GET_ERRORS} from "./types";

const URI = "http://localhost:4000";
export const getPromotionsAction = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
    try {
        const {data} = await axios.get(`${URI}/promotions/`);
        return dispatch({type: GET_PROMOTIONS, payload: data});
    } catch (e) {
        return dispatch({type: GET_PROMOTIONS, payload: []});
    }
};
export const addPromotionAction = (promotionData) => async (dispatch) => {
    try {
        dispatch({type: CLEAR_ERRORS});
        const {data} = await axios.post(`${URI}/promotions/`, promotionData);
        if (data.promotion) dispatch({type: ADD_PROMOTION, payload: data.promotion});
        else dispatch({type: GET_ERRORS, payload: data.errors});
        return data.promotion
    } catch (e) {
        console.log('data will be send later');
    }
};
export const deletePromotionAction = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`${URI}/promotions/${id}`);
        if (data.message) return dispatch({type: DELETE_PROMOTION, payload: id})
        else dispatch({type: GET_ERRORS, payload: data.errors});
    } catch (e) {
        console.log('data not deleted');
    }
};
export const editPromotionAction = (id, promotionData) => async (dispatch) => {
    try {
        let {data} = await axios.put(`${URI}/promotions/${id}`, promotionData);
        if (!data.message) dispatch({type: GET_ERRORS, payload: data.errors});
        else await dispatch(getPromotionsAction());
        return data
    } catch (e) {
        console.log('data not edited');
    }
};
