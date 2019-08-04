/* eslint-disable react/prop-types */
import React from 'react';
import Line from './Line';

const Banner = ({ title = '', text = [] }) => {
  return (
    <div className="Banner">
      <div>
        <h1 className="Banner-title">{title}</h1>
        <Line />
      </div>
      {text.map((t, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <h2 key={`item-${i}`} className="Banner-text">
            {t}
          </h2>
        );
      })}
    </div>
  );
};

export default Banner;
