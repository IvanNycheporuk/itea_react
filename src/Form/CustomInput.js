import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = ({type, name, placeholder, value, handler}) => (
    <label>
        <div>{name}</div>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handler}
        />
    </label>
);

CustomInput.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'number']),
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
    handler: PropTypes.func
}

export default CustomInput;