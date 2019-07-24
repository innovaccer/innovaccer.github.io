import React from 'react';
import PropTypes from 'prop-types';

const ProfileStar = ({ stars }) => {
  return (
    <div className="Profile-star">
      <h3>{stars}</h3>
    </div>
  );
};

ProfileStar.propTypes = {
  stars: PropTypes.string,
};

ProfileStar.defaultProps = {
  stars: 0,
};

export default ProfileStar;
