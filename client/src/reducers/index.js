import {combineReducers} from 'redux';
import errors from './errorReducer';
import department from './departmentReducer';
import product from './productReducer';
import promotion from './promotionReducer';

export default combineReducers({errors, department, product,promotion});
