import React from 'react';

import './App.scss';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className='App'>
    <TopNavigationBar />
    <div className='photo-list'>
      <PhotoList />
    </div>
  </div>
);

export default App;
