import validator from 'validator-js';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    const errors = {};

    if(validator.isNull(data.email)) {
        errors.email = 'This field is required';
    }

    if(validator.isNull(data.password)) {
        errors.password = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
