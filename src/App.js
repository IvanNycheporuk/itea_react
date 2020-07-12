import React from 'react';
import { Provider } from 'react-redux';

import TodoList from './ClassWork/TodoList';


import './App.css';

import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
