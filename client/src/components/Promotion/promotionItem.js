import React from 'react';

const promotionItem = (props) => {
    const toggleEditModal = ({target}) => props.toggleEditModal(target);
    const deletePromotion = (id) => props.deletePromotion(id);
    const {promotions, errors} = props;
    let allPromotion = promotions.map((promotion) =>
        <div className="row col-xl-3 col-lg-5 col-md-5 col-sm-10 col-10 m-3 p-2 border" key={promotion._id}>
            <div className="col-12">
                <h3>Name : {promotion.code}</h3>
                <h3>Price : {promotion.discount}</h3>
                {
                    promotion.active ?
                        <h3>Activation : No</h3>
                        :
                        <h3>Activation : Yes</h3>
                }
            </div>
            <div className="row col-12 justify-content-between">
                <div className="col-5 row">
                    <button value={JSON.stringify(promotion)} type="button"
                            className="btn btn-info col-12" name="edit"
                            onClick={toggleEditModal}>
                        Edit
                    </button>
                </div>
                <div className="col-5 row">
                    <button value={promotion._id} onClick={() => deletePromotion(promotion._id)}
                            type="button" className="btn btn-danger col-12">Delete
                    </button>
                </div>
            </div>
        </div>)
    return (
        <div>
            <div>
                {errors.message && <h1 className="error">{errors.message}</h1>}
            </div>
            <div className="row justify-content-around">
                {allPromotion}
            </div>
        </div>

    );
}

export default promotionItem;
