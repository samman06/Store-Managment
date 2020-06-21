import React from "react";
import {render, shallow} from "enzyme";
import AddDepartmentModal from "../../components/Department/addDepartmentModal"
import EditDepartmentModal from "../../components/Department/editDepartmentModal"
import DepartmentItem from "../../components/Department/departmentItem"

describe("Test Department shallow", () => {
    it("should DepartmentItem length be 1", () => {
        expect(shallow(<DepartmentItem departments={[]}/>).length).toEqual(1);
    });
    it("should EditDepartmentModal length be 1", () => {
        expect(shallow(<EditDepartmentModal errors={{}}/>).length).toEqual(1);
    });
    it("should AddDepartmentModal length be 1", () => {
        expect(shallow(<AddDepartmentModal errors={{}}/>).length).toEqual(1);
    })
});

describe("Test Department Snapshot", () => {
    it("Take DepartmentItem Snapshot", () => {
        expect(shallow(<DepartmentItem departments={[]}/>)).toMatchSnapshot();
    });
    it("Take EditDepartmentModal Snapshot", () => {
        expect(shallow(<EditDepartmentModal errors={{}}/>)).toMatchSnapshot();
    });
    it("Take AddDepartmentModal Snapshot", () => {
        expect(shallow(<AddDepartmentModal errors={{}}/>)).toMatchSnapshot();
    });
});


describe("Test Department render", () => {
    it("expect DepartmentItem render with selected element", () => {
        expect(render(<DepartmentItem departments={[]}/>)["0"].name).toEqual("div");
        expect(render(<DepartmentItem departments={[]}/>)["0"].children[0].name).toEqual("div");
    });
    it("expect EditDepartmentModal render with selected element", () => {
        expect(render(<EditDepartmentModal errors={{}}/>)["0"].name).toEqual("div");
    });
    it("expect AddDepartmentModal render with selected element", () => {
        expect(render(<AddDepartmentModal errors={{}}/>)["0"].name).toEqual("div");
        expect(render(<AddDepartmentModal errors={{}}/>)["0"].children[0].name).toEqual("button");
    });
});

