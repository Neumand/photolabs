import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics }) => {
  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar--logo'>PhotoLabs</span>
      <div className='top-nav-bar--topic-list'>
        <TopicList topics={topics} />
        <FavBadge />
      </div>
    </div>
  );
};

export default TopNavigation;
