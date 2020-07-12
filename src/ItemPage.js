import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
    const [item, setItem] = useState(null);

    let { id } = useParams();

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(res => {
                setItem(res);
            })
    }, []);

    return (
        <div>
            {
                !item ? 'loading'
                :
                <>
                    <span> { item.name } </span>
                    <br />
                    <span> { item.phone } </span>
                    <br/>
                    <span> { item.username } </span>
                    <br/>
                    <span> { item.email } </span>
                </>
            }
        </div>
    )
}

export default ItemPage;