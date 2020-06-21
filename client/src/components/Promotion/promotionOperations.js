import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import PromotionItem from "./promotionItem";
import AddPromotionModal from "./addPromotionModal";
import EditPromotionModal from "./editPromotionModal";
import {clearErrors} from "../../actions/departmentActions";
import {
    addPromotionAction,
    deletePromotionAction,
    editPromotionAction,
    getPromotionsAction
} from "../../actions/promotionActions";
import "../../Styles/promotion.css";
const PromotionOperations = () => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [code, setCode] = useState();
    const [discount, setDiscount] = useState();
    const [active, setActive] = useState(false);
    const [promotionId, setPromotionId] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPromotionsAction());
    }, []);
    const {promotions, errors} = useSelector(({promotion, errors}) => ({
        promotions: promotion.promotions,
        errors,
    }));
    const onChange = (target) => {
        console.log(target);
        if (target.name === "code") setCode(target.value);
        if (target.name === "discount") setDiscount(target.value);
        if (target.name === "active") setActive(target.checked);
    };
    const toggleAddModal = async () => {
        dispatch(clearErrors());
        setAddModal(!addModal)
    };
    const parsePromotionData = (target) => {
        if (target.name === "edit") {
            const {code, discount, active, _id} = JSON.parse(target.value);
            console.log(JSON.parse(target.value));
            setCode(code);
            setPromotionId(_id);
            setDiscount(discount);
            setActive(active)
        }
    };
    const toggleEditModal = (target) => {
        dispatch(clearErrors());
        parsePromotionData(target);
        setEditModal(!editModal)
    };
    const addPromotion = async () => {
        const promotion = await dispatch(addPromotionAction({discount, code, promotionId, active}));
        console.log(promotion);
        if(promotion) {
            setCode("");
            setDiscount("");
            setPromotionId("");
            setActive(false);
            setAddModal(false);
        }
    };
    const editPromotion = async () => {
        const {message} = await dispatch(editPromotionAction(promotionId, {code, promotionId, active, discount}));
        if (message) {
            setCode("");
            setPromotionId("");
            setDiscount("");
            setEditModal(false);
            setActive(false);
        }
    };
    const deletePromotion = (id) => dispatch(deletePromotionAction(id));


    return (
        <div className='row'>
            <div className='col-sm-12'>
                <AddPromotionModal
                    toggleAddModal={toggleAddModal}
                    onChange={onChange} addPromotion={addPromotion}
                    errors={errors} active={active}
                    isOpen={addModal}
                />
                <EditPromotionModal
                    promotion={{active, promotionId, discount, code}}
                    onChange={onChange}
                    toggleEditModal={toggleEditModal}
                    editPromotion={editPromotion}
                    errors={errors} isOpen={editModal}
                />
                <PromotionItem
                    promotions={promotions} errors={errors}
                    toggleEditModal={toggleEditModal}
                    deletePromotion={deletePromotion}
                />
            </div>
        </div>
    );
};

export default PromotionOperations
