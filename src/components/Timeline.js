import React from 'react';
import TimelineItem from 'components/TimelineItem';
import { isOdd } from 'helpers';

const Timeline = ({ data }) => {
  const renderItem = (data, index) => (
    <TimelineItem  
      {...{
        data, 
        key: data.id,
        isOdd: isOdd(index) 
      }} 
    />
  );

  return (
    <div className="timeline">
      {data.map(renderItem)}
    </div>
  );
};

export default Timeline;