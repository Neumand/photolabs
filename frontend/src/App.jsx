import React from 'react';

import './App.scss';
import PhotoListItem from './components/PhotoListItem';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className='App'>
    <div className='photo-list'>
      {Array(3)
        .fill()
        .map((_, i) => (
          <PhotoListItem key={i} />
        ))}
    </div>
  </div>
);

export default App;
