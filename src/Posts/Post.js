import React from 'react';

const Post = ({ title, description }) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ description }</p>
        </div>
    </div>
)

export default Post;