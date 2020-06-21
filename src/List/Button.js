import React from 'react';

const Button = ( {styleClass, action }) => (
    <button onClick={ action } className={ styleClass }>Mark</button>
);

Button.defaultProps = {
    styleClass: 'btn',
    action: () => alert('not implemeted yet')
}

export default Button;