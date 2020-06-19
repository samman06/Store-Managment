import React from 'react';
import {FormGroup, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const EditModal = (props) => {
    const toggleEditModal = ({target}) => props.toggleEditModal(target);
    const onChange = (event) => props.onChange(event);
    const editDepartment = () => props.editDepartment();
    const {isOpen, name, errors} = props;
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggleEditModal}>
                <div className="modal-header" >Edit Department</div>
                <div className="modal-body">
                    <div className="form-group">
                        <input
                            type="name" name="name"
                            placeholder="Department Name"
                            value={name} className="form-control"
                            onChange={onChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={toggleEditModal && editDepartment}>
                        Edit
                    </button>
                    {' '}
                    <button className="btn btn-warning" onClick={toggleEditModal}>Cancel</button>
                </div>
            </Modal>
        </div>
    );
}

export default EditModal;
