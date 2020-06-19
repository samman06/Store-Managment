import React from 'react';

const DepartmentItem = (props) => {
    const toggleEditModal = ({target}) => props.toggleEditModal(target);
    const deleteDepartment = async (id) => await props.deleteDepartment(id);
    let allDepartments = props.departments.map((department, index) =>
        <tr key={department._id}>
            <td>{index + 1}</td>
            <td key={department._id}>
                {department.name}
            </td>
            <td>
                <button value={JSON.stringify(department)}
                        onClick={toggleEditModal}
                        type="button" name="edit" className="btn btn-info"
                >Edit
                </button>
                {" "}
                <button value={department._id} type="button" className="btn btn-danger"
                        onClick={() => deleteDepartment(department._id)}
                >Delete
                </button>
            </td>
        </tr>);
    return (
        <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Department name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {allDepartments}
            </tbody>
        </table>
    );
}


export default DepartmentItem;
