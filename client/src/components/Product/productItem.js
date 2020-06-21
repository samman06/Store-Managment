import React from 'react';

const productItem = (props) => {
    const toggleEditModal = ({target}) => props.toggleEditModal(target);
    const deleteProduct = (id) => props.deleteProduct(id);
    let allProduct = props.products.map((product) =>
        <div key={product._id} className="product-card">
            <div className="card-body">
                <h5 className="card-title">Name : {product.name}</h5>
                <h5 className="card-title">Department : {product.departmentId.name}</h5>
                <h5 className="card-title">Promotion : {product.promotionId.code}</h5>
                <h5 className="card-title">Price : {product.price}</h5>
                {product.promotionId.active &&
                <h5 className="card-title">discount : {product.promotionId.discount}%</h5>}
            </div>
            <div className="card-footer align-bottom">
                <button value={JSON.stringify(product)} type="button"
                        className="btn btn-info col-12 mb-1" name="edit"
                        onClick={toggleEditModal}>
                    Edit
                </button>
                <button value={product._id} onClick={() => deleteProduct(product._id)}
                        type="button" className="btn btn-danger col-12">Delete
                </button>
            </div>
        </div>
    );
    return (
        <div className="product-container">
            <div className="card-deck">
                {allProduct}
            </div>
        </div>
    );
};

export default productItem;
