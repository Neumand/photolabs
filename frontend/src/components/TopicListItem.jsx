import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic }) => {
  return (
    <div className='topic-list--item'>
      <a href={topic.link}>
        <span>{topic.label}</span>
      </a>
    </div>
  );
};

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder',
};
export default TopicListItem;
