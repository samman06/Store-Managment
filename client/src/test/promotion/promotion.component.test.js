import React from "react";
import {render, shallow} from "enzyme";
import AddPromotionModal from "../../components/Promotion/addPromotionModal"
import EditPromotionModal from "../../components/Promotion/editPromotionModal"
import PromotionItem from "../../components/Promotion/promotionItem"

describe("expect Promotion shallow", () => {
    it("expect PromotionItem shallow", () => {
        expect(shallow(<PromotionItem promotions={[]} errors={{}}/>).length).toEqual(1);
    });
    it("expect EditPromotionModal shallow", () => {
        expect(shallow(<EditPromotionModal errors={{}} promotion={{}}/>).length).toEqual(1);
    });
    it("expect AddPromotionModal shallow", () => {
        expect(shallow(<AddPromotionModal errors={{}}/>).length).toEqual(1);
    })
});

describe("expect Promotion Snapshot", () => {
    it("expect PromotionItem Snapshot", () => {
        expect(shallow(<PromotionItem promotions={[]} errors={{}}/>)).toMatchSnapshot();
    });
    it("expect EditPromotionModal Snapshot", () => {
        expect(shallow(<EditPromotionModal errors={{}} promotion={{}}/>)).toMatchSnapshot();
    });
    it("expect AddPromotionModal Snapshot", () => {
        expect(shallow(<AddPromotionModal errors={{}}/>)).toMatchSnapshot();
    });
});

describe("expect Promotion render", () => {
    it("expect PromotionItem render with selected element", () => {
        expect(render(<PromotionItem promotions={[]} errors={{}}/>)["0"].name).toEqual("div");
    });
    it("expect EditPromotionModal render with selected element", () => {
        expect(render(<EditPromotionModal errors={{}} promotion={{}}/>)["0"].name).toEqual("div");
    });
    it("expect AddPromotionModal render with selected element", () => {
        expect(render(<AddPromotionModal errors={{}}/>)["0"].name).toEqual("div");
        expect(render(<AddPromotionModal errors={{}}/>)["0"].children[0].name).toEqual("button");
    });
});

