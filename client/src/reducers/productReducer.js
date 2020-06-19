import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS,
    SEARCH_FOR_PRODUCT,
    PROMOTION_FILTER_PRODUCT,
    DEPARTMENT_FILTER_PRODUCT
} from "../actions/types";

const initialState = {products: [], allProducts: []};
export default function (state = initialState, action) {
    let products;
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                products: action.payload, allProducts: action.payload
            };
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                allProducts: [...state.allProducts, action.payload]
            };
        case DELETE_PRODUCT:
            products = state.allProducts.filter(({_id}) => _id !== action.payload);
            return {...state, products, allProducts: products};
        case SEARCH_FOR_PRODUCT:
            products = state.allProducts.filter(({name}) => name === action.payload);
            return {...state, products};
        case PROMOTION_FILTER_PRODUCT:
            if (action.payload === "All") {
                products = state.allProducts
            } else {
                products = state.allProducts.filter(({promotionId}) => promotionId._id === action.payload);
            }
            return {...state, products};
        case DEPARTMENT_FILTER_PRODUCT:
            if (action.payload === "All") {
                products = state.allProducts
            } else {
                products = state.allProducts.filter(({departmentId}) => departmentId._id === action.payload);
            }
            return {...state, products};
        default:
            return state;
    }

}

