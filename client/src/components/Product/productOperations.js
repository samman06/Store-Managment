import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import ProductItem from "./productItem";
import AddProductModal from "./addProductModal";
import EditProductModal from "./editProductModal";
import {clearErrors, getDepartments} from "../../actions/departmentActions";
import {getPromotionsAction} from "../../actions/promotionActions";
import {
    addProductAction,
    deleteProductAction,
    departmentFilterAction,
    editProductAction,
    getProductsAction,
    promotionFilterAction,
    searchAction
} from "../../actions/productActions";
import Pagination from './Pagination';

const ProductOperations = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [name, setName] = useState();
    const [productId, setProductId] = useState();
    const [departmentId, setDepartmentId] = useState();
    const [promotionId, setPromotionId] = useState();
    const [price, setPrice] = useState();
    const [searchName, setSearchName] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("All");
    const [promotionFilter, setPromotionFilter] = useState("All");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsAction());
        dispatch(getDepartments());
        dispatch(getPromotionsAction());
    }, []);
    const {departments, products, promotions, errors} = useSelector(({promotion, department, product, errors}) => ({
        departments: department.departments,
        promotions: promotion.promotions,
        products: product.products,
        errors,
    }));
    const onChange = ({target, name, value}) => {
        if (name === "name") setName(value);
        if (name === "price") setPrice(value);
        if (name === "productId") setProductId(value);
        if (name === "promotionId") setPromotionId(value);
        if (name === "departmentId") setDepartmentId(value);
        if (name === "departmentFilter") {
            setDepartmentFilter(value);
            dispatch(departmentFilterAction(value))
        }
        if (name === "promotionFilter") {
            setPromotionFilter(value);
            dispatch(promotionFilterAction(value))
        }
        if (name === "searchName") setSearchName(value);
    };
    const toggleAddModal = async () => {
        dispatch(clearErrors());
        setAddModal(!addModal)
    };
    const parseProductData = (target) => {
        if (target.name === "edit") {
            const {name, price, departmentId, promotionId, _id} = JSON.parse(target.value);
            setName(name);
            setProductId(_id);
            setPromotionId(promotionId._id);
            setDepartmentId(departmentId._id);
            setPrice(price);
        }
    };
    const toggleEditModal = async (target) => {
        dispatch(clearErrors());
        await parseProductData(target);
        setEditModal(!editModal)
    };
    const addProduct = async () => {
        const product = await dispatch(addProductAction({price, name, promotionId, departmentId}));
        if (product) {
            setName("");
            setProductId("");
            setPromotionId("");
            setDepartmentId("");
            setPrice("");
            setAddModal(false);
        }
    };
    const editProduct = async () => {
        const message = await dispatch(editProductAction(productId, {name, departmentId, promotionId, price}));
        if (message) {
            setName("");
            setProductId("");
            setPromotionId("");
            setDepartmentId("");
            setPrice("");
            setEditModal(false);
        }
    };
    const deleteProduct = (id) => dispatch(deleteProductAction(id));
    const search = () => {
        dispatch(searchAction(searchName));
        setSearchName("");
    };


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='row'>
            <div className='col-sm-12'>
                <AddProductModal
                    toggleAddModal={toggleAddModal}
                    onChange={onChange} addProduct={addProduct}
                    errors={errors} search={search}
                    promotions={promotions}
                    departmentFilter={departmentFilter}
                    promotionFilter={promotionFilter}
                    departments={departments} isOpen={addModal}
                />
                <EditProductModal
                    product={{departmentId, promotionId, price, name}}
                    onChange={onChange}
                    toggleEditModal={toggleEditModal}
                    editProduct={editProduct}
                    departments={departments}
                    promotions={promotions}
                    errors={errors} isOpen={editModal}
                />
                <ProductItem
                    products={currentProducts}
                    toggleEditModal={toggleEditModal}
                    deleteProduct={deleteProduct}
                />
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default ProductOperations
