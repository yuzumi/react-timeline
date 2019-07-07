import React from 'react';
import TimelineItem from 'components/TimelineItem';

const Timeline = ({ data }) => {
  const isEven = value => value % 2 === 0;

  const renderItem = (data, index) => (
    <TimelineItem  
      {...{
        data, 
        key: data.id,
        isEven: isEven(index)
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