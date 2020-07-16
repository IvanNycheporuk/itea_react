import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './Posts/Posts';
import FullPost from './Posts/FullPost';
import UserPage from './Posts/UserPage';
import Comment from './Posts/Comment';

import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
      <nav>
        <Link to="/">posts</Link>
      </nav>
      <div className="App">
        <Route exact path="/" component={ Posts }/>
        <Route path="/posts/:id" component={ FullPost }/>
        <Route exact path="/posts/:id/comment" component={ Comment }/> 
        {/* эти два роута пресекаются на странице, не разобрался как вывести на страницу отдельно коментарии */}
        <Route exact path="/users/:id" component={ UserPage }/>
      </div>      
      </BrowserRouter>
    </Provider>
  );
}

export default App;
