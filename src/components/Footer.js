/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoLinkedin,
} from 'react-icons/io';

const icons = {
  linkedin: IoLogoLinkedin,
  twitter: IoLogoTwitter,
  youtube: IoLogoYoutube,
  github: IoLogoGithub,
  facebook: IoLogoFacebook,
};

const renderIcon = name => {
  const TagName = icons[name];
  return <TagName title={name} role="link" />;
};

const renderLink = ({ title, url }, key) => (
  <a key={key} href={url} className="Footer-link">
    {title}
  </a>
);
const renderSocial = ({ url, icon }, key) => (
  <a key={key} href={url} className="Footer-icon">
    {renderIcon(icon)}
  </a>
);

const Footer = ({ data = {} }) => {
  const { copyright = '', links = [], social = [] } = data;
  return (
    <footer className="Footer">
      <div>{copyright}</div>
      <div>
        {links.map(renderLink)}
        {social.map(renderSocial)}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  data: PropTypes.object,
};

Footer.defaultProps = {
  data: {},
};

export default Footer;
