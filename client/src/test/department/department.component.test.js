import React from "react";
import {render, shallow} from "enzyme";
import AddDepartmentModal from "../../components/Department/addDepartmentModal"
import EditDepartmentModal from "../../components/Department/editDepartmentModal"
import DepartmentItem from "../../components/Department/departmentItem"

describe("expect Department shallow", () => {
    it("expect DepartmentItem shallow", () => {
        expect(shallow(<DepartmentItem departments={[]}/>).length).toEqual(1);
    });
    it("expect EditDepartmentModal shallow", () => {
        expect(shallow(<EditDepartmentModal errors={{}}/>).length).toEqual(1);
    });
    it("expect AddDepartmentModal shallow", () => {
        expect(shallow(<AddDepartmentModal errors={{}}/>).length).toEqual(1);
    })
});

describe("expect Department Snapshot", () => {
    it("expect DepartmentItem Snapshot", () => {
        expect(shallow(<DepartmentItem departments={[]}/>)).toMatchSnapshot();
    });
    it("expect EditDepartmentModal Snapshot", () => {
        expect(shallow(<EditDepartmentModal errors={{}}/>)).toMatchSnapshot();
    });
    it("expect AddDepartmentModal Snapshot", () => {
        expect(shallow(<AddDepartmentModal errors={{}}/>)).toMatchSnapshot();
    });
});


describe("expect Department render", () => {
    it("expect DepartmentItem render with selected element", () => {
        expect(render(<DepartmentItem departments={[]}/>)["0"].name).toEqual("table");
        expect(render(<DepartmentItem departments={[]}/>)["0"].children[0].name).toEqual("thead");
    });
    it("expect EditDepartmentModal render with selected element", () => {
        expect(render(<EditDepartmentModal errors={{}}/>)["0"].name).toEqual("div");
    });
    it("expect AddDepartmentModal render with selected element", () => {
        expect(render(<AddDepartmentModal errors={{}}/>)["0"].name).toEqual("div");
        expect(render(<AddDepartmentModal errors={{}}/>)["0"].children[0].name).toEqual("button");
    });
});

