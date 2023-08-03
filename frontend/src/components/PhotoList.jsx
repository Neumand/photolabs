import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos }) => {
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
        />
      ))}
    </ul>
  );
};

export default PhotoList;
