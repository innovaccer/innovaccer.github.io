import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ nav = {} }) => {
  const { logo, link } = nav;

  return (
    <nav className="NavBar">
      <a href="/">
        <img alt="logo" src={logo} />
      </a>
      <a target="__blank" className="NavBar-link" href={link.url}>
        {link.title}
      </a>
    </nav>
  );
};

Nav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  nav: PropTypes.object,
};

Nav.defaultProps = {
  nav: {},
};

export default Nav;
