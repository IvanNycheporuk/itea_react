import React, { useState, useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import ItemPage from './ItemPage';
import ListItem from './ListItem';

const List = () => {
    let { path, url } = useRouteMatch();
    let [data, seData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                seData(res);
            });            
    }, []);

    return (
        <>
            <h1>List page</h1>
            <ul>
                {
                    data.length > 0 ?
                    data.map(item => (
                        (
                            <ListItem key={item.id} name={item.name} url={url} id={item.id} {...item}/>
                        )
                    ))
                    :
                    <span>loading...</span>
                }
            </ul>
            {/* <Route path={`${path}/:id`} component={ ItemPage } /> // didnt worked for me */}
       </>
    )
}
    

export default List;