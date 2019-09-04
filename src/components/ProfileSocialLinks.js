/* eslint-disable react/prop-types */
import React from 'react';
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

const ProfileSocialLinks = ({ social }) => {
  const { github, twitter = '' } = social;
  return (
    <div>
      <a target="__blank" href={github} className="Profile-icon">
        <IoLogoGithub />
      </a>
      {!!twitter.length && (
        <a target="__blank" href={twitter} className="Profile-icon">
          <IoLogoTwitter />
        </a>
      )}
    </div>
  );
};

export default ProfileSocialLinks;
