import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic }) => {
  return (
    <div className='topic-list--item'>
      <a href={topic.slug}>
        <span>{topic.title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
