import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comment = () => {
    let { id } = useParams();

    let [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${ id }/comments`)
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
    }, []);

    return (
        <>
            <p>Comment below</p>
            {
                data ?
                data.map(item => (
                    <div key={ item.id } className="card">
                        <div className="card-body">
                            <h5 className="card-title">{ item.name }</h5>
                            <p className="card-text">{ item.body }</p>
                            <p className="card-text">{ item.email }</p>                        
                        </div>
                    </div>
                ))
                :
                <p>loading</p>
            }
        </>
    )
}

export default Comment;