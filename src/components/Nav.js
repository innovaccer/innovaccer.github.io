import React from 'react';

const Nav = () => {
  return (
    <nav className="NavBar">
      <a href="/">
        <img
          alt="logo"
          src="https://innovaccer.com/static/image/site-logo/innovaccer-logo-black.svg"
        />
      </a>
      <a className="NavBar-link" href="http://innovaccer.com">
        GO TO INNOVACCER.COM
      </a>
    </nav>
  );
};

export default Nav;
