/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProfileStar from './ProfileStar';
import ProfileSocialLinks from './ProfileSocialLinks';

const ProfileCard = ({ profile = {} }) => {
  const {
    name = '',
    username = '',
    avatar = '',
    stars = 0,
    social = {},
  } = profile;
  return (
    <div className="Profile">
      <div className="Profile-avatar">
        <img src={avatar} alt="Profile-avatar" className="Profile-avatar" />
        <ProfileStar stars={stars.toString()} />
      </div>
      <h2 className="Profile-name">{username || name}</h2>
      <ProfileSocialLinks social={social} />
    </div>
  );
};

ProfileCard.defaultProps = {
  profile: {},
};

ProfileCard.propTypes = {
  profile: PropTypes.object,
};

export default ProfileCard;
