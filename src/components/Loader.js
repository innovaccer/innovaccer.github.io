/* eslint-disable react/prop-types */
import React from 'react';

const Loader = ({ loading = true }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  );
};

export default Loader;
