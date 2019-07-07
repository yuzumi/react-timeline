import React from 'react';
import classNames from 'classnames';

const TimelineItem = ({ data, isEven }) => (
  <div 
    className={classNames(
      'timeline-item', {
      'timeline-item--is-even': isEven,
      'timeline-item--is-odd': !isEven,
    })}
  >
    <main className="timeline-item__content">
      <span className="timeline-item__tag">{data.tag}</span>
      <time className="timeline-item__datetime">{data.datetime}</time>
      <p className="timeline-item__text">{data.text}</p>
      <span className="timeline-item__circle" />
    </main>
  </div>
); 

export default TimelineItem;