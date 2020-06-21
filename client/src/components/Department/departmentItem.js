import React from 'react';

const DepartmentItem = (props) => {
    const toggleEditModal = ({target}) => props.toggleEditModal(target);
    const deleteDepartment = async (id) => await props.deleteDepartment(id);
    let allDepartments = props.departments.map((department) =>
        <div className="department-card m-1" key={department._id}>
            <div className="cord-body">
                <h5 className="card-title m-1">Name : {department.name}</h5>
            </div>
            <div className="card-footer">
                <button value={JSON.stringify(department)}
                        onClick={toggleEditModal}
                        type="button" name="edit" className="btn btn-info col-12 mb-1">
                    Edit
                </button>
                <button value={department._id} type="button" className="btn btn-danger col-12"
                        onClick={() => deleteDepartment(department._id)}>
                    Delete
                </button>
            </div>
        </div>
    );
    return (
        <div className="department-container">
            <div className="card-deck">
                {allDepartments}
            </div>
        </div>
    );
};

export default DepartmentItem;
