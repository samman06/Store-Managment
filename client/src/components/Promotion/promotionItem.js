import React from 'react';

const promotionItem = (props) => {
    const toggleEditModal = ({target}) => props.toggleEditModal(target);
    const deletePromotion = (id) => props.deletePromotion(id);
    const {promotions, errors} = props;
    let allPromotions = promotions.map((promotion, index) =>
        <div className="promotion-card" key={promotion._id}>
            <div className="card-body">
                <h5 className="card-title">Code : {promotion.code}</h5>
                <h5 className="card-title">Discount : {promotion.discount}</h5>
                <h5 className="card-title">Active : {
                    promotion.active ?
                        <button type="button" className="btn btn-success btn-circle btn-lg">
                            <i className="glyphicon glyphicon-ok"></i>
                        </button>
                        :
                        <button type="button" className="btn btn-danger btn-circle btn-lg">
                            <i className="glyphicon glyphicon-ok"></i>
                        </button>
                }</h5>
            </div>
            <div className="card-footer">
                <button value={JSON.stringify(promotion)} type="button"
                        className="btn btn-info col-12 mb-1" name="edit"
                        onClick={toggleEditModal}>
                    Edit
                </button>
                <button value={promotion._id} onClick={() => deletePromotion(promotion._id)}
                        type="button" className="btn btn-danger col-12 font-weight-bold">
                    Delete
                </button>
            </div>
        </div>
    );
    return (
        <div>
            <div>
                {errors.message && alert(errors.message)}
            </div>
            <div className="promotion-container">
                <div className="card-deck">
                    {allPromotions}
                </div>
            </div>
        </div>

    );
}

export default promotionItem;
