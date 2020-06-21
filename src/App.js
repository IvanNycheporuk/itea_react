import React from 'react';

import ListContainer from './List/ListContainer';
import ImageLoader from './Image/ImageLoader';
import Table from './Table/Table';

import './App.css';

function App() {
  return (
    <div className="App">
      <ListContainer />
      <ImageLoader src="https://images.hdqwalls.com/wallpapers/beautiful-view-from-the-dock-4k-66.jpg" />
      <Table />
    </div>
  );
}

export default App;
