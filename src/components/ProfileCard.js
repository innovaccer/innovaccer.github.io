/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProfileStar from './ProfileStar';
// import ProfileSocialLinks from './ProfileSocialLinks';

const ProfileCard = ({ profile = {} }) => {
  const {
    name = '',
    username = '',
    avatar = '',
    contributions = 0,
    profileURL,
    // social = {},
  } = profile;
  return (
    <div className="Profile">
      <div className="Profile-box">
        <a href={profileURL}>
          <img src={avatar} alt="Profile-avatar" className="Profile-avatar" />
          <ProfileStar stars={contributions.toString()} />
        </a>
      </div>

      <a href={profileURL}>
        <h3 className="Profile-name">{username || name}</h3>
      </a>
      {/* <ProfileSocialLinks social={social} /> */}
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
