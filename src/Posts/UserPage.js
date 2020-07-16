import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
    let { id } = useParams();
    let [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${ id }`)
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
    }, [])

    console.log(data);

    return (
        <>
            {
                data ?
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{ data.name }</h5>
                        <p className="card-text">{ data.phone }</p>
                        <p className="card-text">{ data.website }</p>                        
                    </div>
                </div>
                :
                <p>loading</p>
            }
        </>
    )
}

export default UserPage;