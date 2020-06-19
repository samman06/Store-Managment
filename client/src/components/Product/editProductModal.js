import React from 'react';
import {Modal} from "reactstrap";

const editProductModal = (props) => {
    const toggleEditModal = ({target}) => props.toggleEditModal(target);
    const onChange = ({target}) => props.onChange(target);
    const editProduct = () => props.editProduct();

    const {promotions, departments, isOpen, errors, product} = props;
    let allDepartments, allPromotions;
    if (promotions)
        allPromotions = promotions.map(({_id, code}) => <option key={_id} value={_id}>{code}</option>);
    if (departments)
        allDepartments = departments.map(({_id, name}) => <option key={_id} value={_id}>{name}</option>);

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggleEditModal}>
                <div className="modal-header">Edit Product</div>
                <div className="modal-body">
                    <div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="name" className="form-control" name="name" value={product.name} onChange={onChange}/>
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="name" className="form-control" name="name" value={product.price} onChange={onChange}/>
                            {errors.price && <span className="error">{errors.price}</span>}
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <select value={product.departmentId} name="departmentId" className="form-control" onChange={onChange}>
                                {allDepartments}
                            </select>
                            {errors.departmentId && <span className="error">{errors.departmentId}</span>}
                        </div>
                        <div className="form-group">
                            <label>Promotion</label>
                            <select name="promotionId" value={product.promotionId} className="form-control" onChange={onChange}>
                                {allPromotions}
                            </select>
                            {errors.promotionId && <span className="error">{errors.promotionId}</span>}
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary mr-1" onClick={toggleEditModal && editProduct}>
                        Edit
                    </button>
                    <button className="btn btn-warning" onClick={toggleEditModal}>Cancel</button>
                </div>
            </Modal>
        </div>
    );
}

export default editProductModal;
