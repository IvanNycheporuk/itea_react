import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../theme-context';

const TogglerItem = ({ name, action, active }) => {
    const theme = useContext( ThemeContext );
    console.log(theme);
    return (
        <button 
            className={active ? 'togglerItem active' : 'togglerItem'}
            onClick={ action( name) }>
            { name }
        </button>
    );
}

TogglerItem.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func,
    active: PropTypes.bool
}

export default TogglerItem;