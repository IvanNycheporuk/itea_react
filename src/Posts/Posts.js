import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch, Route } from 'react-router-dom';

import * as actionTypes from '../actions/actionTypes';
import * as actionCreators from '../actions/actionCreators';

import Post from './Post';
import FullPost from './FullPost';

const Posts = ({ 
    counter, data, loaded,
    addCounter, getData
}) => {

    let [postsToShow, showMorePosts] = useState(2);

    useEffect(() => {
        getData();
    }, []);

    let { path, url } = useRouteMatch();

    const showMorePostsHandler = () => {
        showMorePosts(postsToShow += 2)
    }

    return (
        <div>
            <h1>Here will be posts</h1>
            <span>{ counter }</span>
            <button onClick={ addCounter }>add count</button>
            <div className="container">
                {
                    !loaded ?
                        <p>posts are loading :)</p>
                    :
                        data.slice(0, postsToShow).map(item => (
                            <Link key={ item.id } to={`posts/${ item.id }`}>
                                <Post  title={ item.title } description={ item.body }/>
                            </Link>
                        ))

                }
            </div>
            <button onClick={ showMorePostsHandler } className="btn btn-primary">load more posts</button>
            {/* <Route path="/posts/:id" component={ FullPost }/> doesnt work here*/} 

        </div>
    )
}

Posts.defaultProps = {
    counter: 1
}

const mapStateToProps = ( state ) => {
    return {
        counter: state.counter,
        data: state.data,
        loaded: state.loaded
    }
}

const mapDispatchToProps = ( dispatch ) => ({
    addCounter: () => { dispatch({ type: actionTypes.ADD_COUNTER }) },
    getData: () => { dispatch(actionCreators.getPosts) }
})

export default connect( mapStateToProps, mapDispatchToProps )( Posts );