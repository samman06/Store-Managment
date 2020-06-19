import React from "react";
import {render, shallow} from "enzyme";
import AddProductModal from "../../components/Product/addProductModal"
import EditProductModal from "../../components/Product/editProductModal"
import ProductItem from "../../components/Product/productItem"

describe("expect Product shallow", () => {
    it("expect ProductItem shallow", () => {
        expect(shallow(<ProductItem products={[]}/>).length).toEqual(1);
    });
    it("expect EditProductModal shallow", () => {
        expect(shallow(<EditProductModal errors={{}} product={{}}/>).length).toEqual(1);
    });
    it("expect AddProductModal shallow", () => {
        expect(shallow(<AddProductModal errors={{}}/>).length).toEqual(1);
    })
});

describe("expect Product Snapshot", () => {
    it("expect ProductItem Snapshot", () => {
        expect(shallow(<ProductItem products={[]}/>)).toMatchSnapshot();
    });
    it("expect EditProductModal Snapshot", () => {
        expect(shallow(<EditProductModal errors={{}} product={{}}/>)).toMatchSnapshot();
    });
    it("expect AddProductModal Snapshot", () => {
        expect(shallow(<AddProductModal errors={{}}/>)).toMatchSnapshot();
    });
});

describe("expect Product render", () => {
    it("expect ProductItem render with selected element", () => {
        expect(render(<ProductItem products={[]}/>)["0"].name).toEqual("div");
    });
    it("expect EditProductModal render with selected element", () => {
        expect(render(<EditProductModal errors={{}} product={{}}/>)["0"].name).toEqual("div");
    });
    it("expect AddProductModal render with selected element", () => {
        expect(render(<AddProductModal errors={{}}/>)["0"].name).toEqual("div");
        expect(render(<AddProductModal errors={{}}/>)["0"].children[0].name).toEqual("nav");
    });
});

