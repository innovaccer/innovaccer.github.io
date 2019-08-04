import React from 'react';
import PropTypes from 'prop-types';

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

Loader.defaultProps = {
  loading: true,
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
