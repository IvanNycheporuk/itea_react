import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../theme-context';

const CustomInput = ({type, name, placeholder, value, handler}) =>  {
    const theme = useContext(ThemeContext)

    return (
        <label>
            <div>{name}</div>
            <input
                style={{
                    color: theme.color,
                    background: theme.background
                }}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handler}
            />
        </label>
    )
}



CustomInput.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'number']),
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
    handler: PropTypes.func
}

export default CustomInput;