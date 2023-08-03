import React, { useState } from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(id) {
    setFavorites(
      favorites.includes(id)
        ? favorites.filter((fave) => fave !== id)
        : [...favorites, id],
    );
  }

  return (
    <div className='home-route'>
      <TopNavigation topics={topics} />
      <PhotoList
        photos={photos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;
