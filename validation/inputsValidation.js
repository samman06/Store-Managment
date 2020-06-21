const validator = require('validator');

class inputsValidation {

    validateDepartmentInputs(name) {
        let errors = {};
        name = !this.isEmpty(name) ? name : "";
        if (!validator.isLength(name, {min: 3, max: 25}))
            errors.name = "name must be between 3 and 25 characters";
        return {
            errors,
            isValid: this.isEmpty(errors),
        }
    };

    validateProductInputs(name, price) {
        let errors = {};
        name = !this.isEmpty(name) ? name : "";
        if (!validator.isLength(name, {min: 3, max: 25}))
            errors.name = "name must be between 3 and 25 characters";
        if (!Number(price) || Number(price) < 10 || Number(price) > 15000)
            errors.price = "The Price must be number and between 3 and 15000";
        return {
            errors,
            isValid: this.isEmpty(errors),
        }
    }

    validatePromotionInputs(code, discount) {
        let errors = {};
        code = !this.isEmpty(code) ? code : "";
        if (!validator.isLength(code, {min: 3, max: 25}))
            errors.code = "code must be between 3 and 25 characters";
        if (!Number(discount) || Number(discount) <= 0 || Number(discount) > 100)
            errors.discount = "The Discount must be > 0 and <= 100";
        return {
            errors,
            isValid: this.isEmpty(errors),
        }
    }

    isEmpty(value) {
        return value === undefined || value === null ||
            (typeof value === 'object' && Object.keys(value).length === 0) ||
            (typeof value === 'string' && value.trim().length === 0);
    }
}


const validation = new inputsValidation();
module.exports = validation;
