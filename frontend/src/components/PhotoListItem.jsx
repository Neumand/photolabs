import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ user, location, imageSource, id, hideUserName }) => {
  return (
    <div className='photo-list--item'>
      <div className='photo-list--user-details'>
        <img className='photo-list--user-profile' src={user.profile} />
        <div className='photo-list--user-info'>
          {user.name}
          <div className='photo-list--user-location'>
            <span>{`${location.city}, ${location.country}`}</span>
          </div>
        </div>
      </div>
      <img
        className='photo-list--image'
        src={imageSource}
        alt={`Photo submitted by ${user.username}`}
      />
      <PhotoFavButton />
    </div>
  );
};

export default PhotoListItem;
