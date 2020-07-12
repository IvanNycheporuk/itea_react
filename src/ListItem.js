import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({id, name, url, ...item}) => {
    return (
        <li key={id}>
            <Link to={{
                pathname: `${url}/${id}`,
                search: "?sort=name",
                hash: "#the-hash",
                state: { fromDashboard: true } // cant set state here, but all other props are sending to ItemPAge component
            }
                
                }>
                {name}
            </Link>
        </li>
    );
}

export default ListItem;