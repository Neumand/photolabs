import React, { useState } from 'react';

import '../styles/PhotoFavButton.scss';
import { FavIcon } from './FavIcon';

function PhotoFavButton() {
  const [favourite, setFavourite] = useState(false);

  return (
    <div
      className='photo-list--fav-icon'
      onClick={() => setFavourite(!favourite)}
    >
      <div className='photo-list--fav-icon-svg'>
        <FavIcon fill={favourite ? '#C80000' : 'none'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
