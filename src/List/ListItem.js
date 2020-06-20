import React from 'react';

const ListItem = ({ name, mark, id, marked, company, email, address }) => (
    <li className="list-group-item d-flex justify-content-between" data-id={ id }>
        <div>
            <p>{ name }</p>
            <p>{ company }</p>
            <p>{ email }</p>
            <p>{ address }</p>
        </div>
        <button className={ marked ? "btn align-self-center btn-danger" : "btn align-self-center btn-primary" } onClick={ mark }>Mark</button>
    </li>
);

ListItem.defaultProps = {
    name: 'Test',
    company: 'Test company',
    email: 'notyet@mail.com',
    address: 'test street',
    mark: () => alert( 'not implemented yet' )
}

export default ListItem;