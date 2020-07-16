import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const FullPost = () => {
    let { id } = useParams();

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [userId, setUserId] = useState('');
    
    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${ id }`)
            .then( res => res.json())
            .then(res => {
                let { title, body, userId } = res;

                setTitle( title );
                setDescription( body );
                setUserId( userId )
            })
    })

    return (
        <>
            {
                title.length > 0 ?
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{ title }</h5>
                            <p className="card-text">{ description }</p>
                            <Link to={`/users/${userId}`}>link to user :)</Link>
                            <br />
                            <Link to={`/posts/${ id }/comment`}>link to comments :)</Link>
                        </div>
                    </div>
                    :
                    <p>loading</p>
            }
        </>
    )
}

export default FullPost;
