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
          username={photo.username}
          hideUserName={photo.hideUserName}
          imageSource={photo.imageSource}
        />
      ))}
    </ul>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    },
  ],
};

export default PhotoList;
