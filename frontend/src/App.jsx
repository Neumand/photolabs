import React from 'react';

import './App.scss';
import mockPhotos from './mocks/photos';
import mockTopics from './mocks/topics';
import HomeRoute from './routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className='App'>
    <HomeRoute photos={mockPhotos} topics={mockTopics} />
  </div>
);

export default App;
