import React from 'react';

const productItem = (props) => {
    const toggleEditModal = ({target}) => props.toggleEditModal(target);
    const deleteProduct = (id) => props.deleteProduct(id);
    let allProduct = props.products.map((product) =>
        <div className="row col-xl-3 col-lg-5 col-md-5 col-sm-10 col-10 m-4 border p-1" key={product._id}>
            <div className="col-12">
                <h3>Name : {product.name}</h3>
                <h3>Price : {product.price}</h3>
                <h3>Department : {product.departmentId.name}</h3>
                <h3> Promotion {product.promotionId.code}</h3>
                {product.promotionId.active ?
                    <h3>discount : {product.promotionId.discount}%</h3>
                    :
                    <h3>No Discount</h3>
                }
            </div>
            <div className="row col-12 justify-content-between">
                <div className="col-5 row">
                    <button value={JSON.stringify(product)} type="button"
                            className="btn btn-info col-12" name="edit"
                            onClick={toggleEditModal}>
                        Edit
                    </button>
                </div>
                <div className="col-5 row">
                    <button value={product._id} onClick={() => deleteProduct(product._id)}
                            type="button" className="btn btn-danger col-12">Delete
                    </button>
                </div>
            </div>
        </div>
    );
    return (
        <div className="row justify-content-around">
            {allProduct}
        </div>
    );
};

export default productItem;
