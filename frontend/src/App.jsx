import React from 'react';

import './App.scss';
import PhotoListItem from './components/PhotoListItem';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className='App'>
    <PhotoListItem />
  </div>
);

export default App;
