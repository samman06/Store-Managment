import React from 'react';
import {Modal, ModalHeader} from "reactstrap";

const addProductModal = (props) => {
    const onChange = ({target}) => props.onChange(target);
    const toggleAddModal = () => props.toggleAddModal();
    const search = () => props.search();
    const addProduct = () => props.addProduct();

    const {promotions, departments, isOpen, errors,promotionFilter,departmentFilter} = props;
    let allDepartments, allPromotions;
    if (promotions)
        allPromotions = promotions.map(({_id, code}) => <option value={_id} key={_id}>{code}</option>);
    if (departments)
        allDepartments = departments.map(({_id, name}) => <option key={_id} value={_id}>{name}</option>);
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-light navbar-light mt-2">
                <button
                    onClick={toggleAddModal} className='btn btn-info navbar-brand'>
                    Add Product +
                </button>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <select value={departmentFilter} className="form-control nav-link" name="departmentFilter" onChange={onChange}>
                                <option value="All">All Departments</option>
                                {allDepartments}
                            </select>
                        </li>
                        <li className="nav-item">
                            <select value={promotionFilter} className="form-control nav-link" name="promotionFilter" onChange={onChange}>
                                <option value="All">All Promotions</option>
                                {allPromotions}
                            </select>
                        </li>
                        <li className="nav-item">
                            <input className="form-control nav-link" name="searchName" placeholder="Product Name"
                                   onChange={onChange}/>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={search} className='btn btn-info'>
                                Search
                            </button>
                        </li>

                    </ul>
                </div>
            </nav>


            <Modal isOpen={isOpen} toggle={toggleAddModal}>
                <ModalHeader toggle={toggleAddModal}>Add Product</ModalHeader>
                <div className="modal-body">
                    <div className="form-group">
                        <input className="form-control" name="name" id="name" type="text"
                               placeholder="Product name" onChange={onChange}/>
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="price" id="name" type="number"
                               placeholder="Product price" onChange={onChange}/>
                        {errors.price && <span className="error">{errors.price}</span>}
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="departmentId" onChange={onChange}>
                            <option value="0">Select Department</option>
                            {allDepartments}
                        </select>
                        {errors.departmentId && <span className="error">{errors.departmentId}</span>}
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="promotionId" onChange={onChange}>
                            <option value="0">Select Promotion</option>
                            {allPromotions}
                        </select>
                        {errors.promotionId && <span className="error">{errors.promotionId}</span>}
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary mr-1" onClick={toggleAddModal && addProduct}>
                        Add Product
                    </button>
                    <button className="btn btn-warning" onClick={toggleAddModal}>
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default addProductModal;
