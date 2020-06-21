import React from 'react';

import Button from './Button';

const ListItem = ({ name, action, id, marked }) => (
    <li data-id={ id } className={marked ? "list-group-item d-flex justify-content-between marked" : "list-group-item d-flex justify-content-between"}>
        <span>{ name }</span>
        <Button 
            styleClass={ marked ? "btn btn-danger" : "btn btn-primary"} 
            action={ action }             
        />
    </li>
);

ListItem.defaultProps = {
    name: 'Test name goes gere',
    action: () => alert('not implemeted yet')
}

export default ListItem;