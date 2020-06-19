import {ADD_PROMOTION, DELETE_PROMOTION, GET_PROMOTIONS} from "../actions/types";

const initialState = {promotions: []};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROMOTIONS:
            return {
                promotions: action.payload,
            };
        case ADD_PROMOTION:
            return {
                promotions: [...state.promotions, action.payload],
            };
        case DELETE_PROMOTION:
            let promotions = state.promotions.filter(({_id}) => _id !== action.payload);
            return {promotions};
        default:
            return state;
    }

}

