import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {
    addDepartmentAction,
    deleteDepartmentAction,
    editDepartmentAction,
    getDepartments,
    clearErrors
} from "../../actions/departmentActions";
import DepartmentItem from "./departmentItem"
import AddDepartmentModal from "./addDepartmentModal"
import EditDepartmentModal from "./editDepartmentModal";
import "../../Styles/department.css";
const DepartmentOperations = () => {
    const [name, setName] = useState();
    const [departmentId, setDepartmentId] = useState();
    const [addModal, setAddModal] = useState();
    const [editModal, setEditModal] = useState();
    const dispatch = useDispatch();
    const  {departments,errors} = useSelector(({errors, department}) => ({
        departments: department.departments,
        errors
    }));
    useEffect(() => {
        dispatch(getDepartments())
    }, []);
    const onChange = ({target}) =>setName(target.value);
    const toggleAddModal = () => {
        dispatch(clearErrors());
        setAddModal(!addModal)
    };
    const parseDepartmentData = async (target) => {
        if (target.name === "edit") {
            const {name, _id} = await JSON.parse(target.value);
            setName(name);
            setDepartmentId(_id);
        }
    };
    const addDepartment = async () => {
        const {payload} = await dispatch(addDepartmentAction({name}));
        if (payload._id) setAddModal(false)
    };
    const toggleEditModal = async (target) => {
        dispatch(clearErrors());
        await parseDepartmentData(target);
        setEditModal(!editModal)
    };
    const editDepartment = async () => {
        const {message} = await dispatch(editDepartmentAction(departmentId, {name}));
        if (message) {
            setName("");
            setEditModal(false);
        }
    };
    const deleteDepartment = async (id) => await dispatch(deleteDepartmentAction(id));

    return (
        <div className="col-sm-12">
            <AddDepartmentModal
                isOpen={addModal} errors={errors}
                onChange={onChange}
                toggleAddModal={toggleAddModal}
                addDepartment={addDepartment}
            />
            <EditDepartmentModal
                name={name} errors={errors}
                isOpen={editModal}
                onChange={onChange}
                toggleEditModal={toggleEditModal}
                editDepartment={editDepartment}
            />
            <DepartmentItem
                departments={departments}
                deleteDepartment={deleteDepartment}
                toggleEditModal={toggleEditModal}
            />
        </div>
    );
};

export default DepartmentOperations
