import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ username, imageSource, id, hideUserName }) => {
  return (
    <div className='photo-list--item'>
      <img
        className='photo-list--image'
        src={imageSource}
        alt={`Photo submitted by ${username}`}
      />
      <PhotoFavButton />
    </div>
  );
};

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;
