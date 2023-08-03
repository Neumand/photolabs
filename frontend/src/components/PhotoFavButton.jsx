import React from 'react';

import '../styles/PhotoFavButton.scss';
import { FavIcon } from './FavIcon';

function PhotoFavButton({ id, selected, onClick }) {
  return (
    <div className='photo-list--fav-icon' onClick={() => onClick(id)}>
      <div className='photo-list--fav-icon-svg'>
        <FavIcon fill={selected ? '#C80000' : 'none'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
