import React from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => (
  <div className='home-route'>
    <TopNavigation topics={topics} />
    <PhotoList photos={photos} />
  </div>
);

export default HomeRoute;
