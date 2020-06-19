import React from 'react';
import {Modal, ModalHeader} from "reactstrap";

const addDepartmentModal = (props) => {
    const toggleAddModal = () => props.toggleAddModal();
    const onChange = (event) => props.onChange(event);
    const addDepartment = () => props.addDepartment();

    const {isOpen, errors} = props;
    return (
        <div>
            <button onClick={toggleAddModal} className='btn btn-info mt-1 mb-1'>
                Add Department +
            </button>
            <Modal isOpen={isOpen} toggle={toggleAddModal}>
                <div className="modal-header">Add Department</div>
                <div className="modal-body">
                    <div className='form-group'>
                        <input className='form-control' type="name" name="name"
                               onChange={onChange} placeholder="Department Name"/>
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary mr-1" onClick={toggleAddModal && addDepartment}>
                        Add Department
                    </button>
                    <button className="btn btn-warning" onClick={toggleAddModal}>cancel</button>
                </div>
            </Modal>
        </div>
    );
}

export default addDepartmentModal;
