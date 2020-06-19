import React from 'react';
import {Modal} from "reactstrap";

const addPromotionModal = (props) => {
    const toggleAddModal = () => props.toggleAddModal();
    const onChange = ({target}) => props.onChange(target);
    const addPromotion = () => props.addPromotion();
    const {isOpen, errors, active} = props;
    return (
        <div className="col-sm-12">
            <button
                onClick={toggleAddModal} className='btn btn-info mt-1 mb-1'>
                Add Promotion +
            </button>
            <Modal isOpen={isOpen} toggle={toggleAddModal}>
                <div className="modal-header">Add Promotion</div>
                <div className="modal-body">
                    <div className="form-group">
                        <input className="form-control" name="code" id="name" type="text"
                               placeholder="Promotion Code" onChange={onChange}/>
                        {errors.code && <span className="error">{errors.code}</span>}
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="discount" type="number"
                               placeholder="Promotion Discount" onChange={onChange}/>
                        {errors.discount && <span className="error">{errors.discount}</span>}
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="active"
                               checked={active} onChange={onChange}/>
                        <label className="custom-control-label">Is Active ?</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary mr-1" onClick={toggleAddModal && addPromotion}>
                        Add Promotion
                    </button>
                    <button className="btn btn-warning" onClick={toggleAddModal}>
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default addPromotionModal;
