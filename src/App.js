import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route } from 'react-router-dom';

import Posts from './Posts/Posts';
import FullPost from './Posts/FullPost';

import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={ Posts }/>
        <Route path="/posts/:id" component={ FullPost }/>
      </div>      
      </BrowserRouter>
    </Provider>
  );
}

export default App;
