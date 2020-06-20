import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const editPromotionModal = (props) => {
    const toggleEditModal = ({target}) => props.toggleEditModal(target);
    const onChange = ({target}) => props.onChange(target);
    const editPromotion = () => props.editPromotion();
    const {isOpen, errors, promotion} = props;
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggleEditModal}>
                <ModalHeader>Edit Promotion</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Code</label>
                            <input className="form-control" type="text" name="code" value={promotion.code}
                                   onChange={onChange}/>
                            {errors.code && <span className="error">{errors.code}</span>}
                        </div>
                        <div className="form-group">
                            <label>Discount</label>
                            <input className="form-control" type="number" name="discount" value={promotion.discount}
                                   onChange={onChange}/>
                            {errors.discount && <span className="error">{errors.discount}</span>}
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input"
                                   onChange={onChange} name="active" checked={promotion.active}/>
                            <label className="form-check-label">Is Active ?</label>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary mr-1" onClick={toggleEditModal && editPromotion}>
                        Edit
                    </button>
                    <button className="btn btn-warning" onClick={toggleEditModal}>Cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default editPromotionModal;
