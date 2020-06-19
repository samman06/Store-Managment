import React from "react";
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS,
    DEPARTMENT_FILTER_PRODUCT,
    PROMOTION_FILTER_PRODUCT,
    SEARCH_FOR_PRODUCT
} from "../../actions/types";
import productReducer from '../../reducers/productReducer';

const product1 = {_id: 1, name: "prod 1", price: 400, departmentId: {_id: 1}, promotionId: {_id: 1}};
const product2 = {_id: 2, name: "prod 2", price: 400, departmentId: {_id: 2}, promotionId: {_id: 2}};
const products = [product1, product2];
describe("test Product Reducer", () => {
    it("return Initial State", () => {
        expect(productReducer({products: [], allProducts: []}, {})).toEqual({products: [], allProducts: []});
        expect(productReducer(products, {})).toEqual(products);
    });
    it("Add Product to the State", () => {
        expect(productReducer({products, allProducts: products}, {
            type: ADD_PRODUCT,
            payload: product1
        })).toEqual({products: [...products, product1], allProducts: [...products, product1]});
    });
    it("Delete Product from the State", () => {
        expect(productReducer({products, allProducts: products}, {
            type: DELETE_PRODUCT,
            payload: 1
        })).toEqual({products: [product2], allProducts: [product2]});
    });
    it("Get All Products", () => {
        expect(productReducer({products: []}, {
            type: GET_PRODUCTS,
            payload: products
        })).toEqual({products, allProducts: products});
    });
    it("Search For Products By Name", () => {
        expect(productReducer({products, allProducts: products}, {
            type: SEARCH_FOR_PRODUCT,
            payload: "noo"
        })).toEqual({products: [], allProducts: products});
    });
    it("Expect Filter products by department", () => {
        expect(productReducer({products, allProducts: products}, {
            type: DEPARTMENT_FILTER_PRODUCT,
            payload: 1
        })).toEqual({products: [product1], allProducts: products});
    });
    it("Expect Filter Products by promotion", () => {
        expect(productReducer({products, allProducts: products}, {
            type: PROMOTION_FILTER_PRODUCT,
            payload: 2
        })).toEqual({products: [product2], allProducts: products});
    });
});
