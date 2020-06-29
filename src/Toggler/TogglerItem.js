import React from 'react';
import PropTypes from 'prop-types';

const TogglerItem = ({ name, action, active, type }) => (
    <button 
        className={active ? 'togglerItem active' : 'togglerItem'}
        onClick={ action(type, name) }>
        { name }
    </button>
);

TogglerItem.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func,
    active: PropTypes.bool
}

export default TogglerItem;