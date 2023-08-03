import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, favorites, toggleFavorite }) => {
  return (
    <ul className='photo-list'>
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          user={photo.user}
          location={photo.location}
          hideUserName={photo.hideUserName}
          imageSource={photo.urls.regular}
          selected={favorites.includes(photo.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
