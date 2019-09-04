/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Nav from './Nav';
import Banner from './Banner';
import Line from './Line';
// import SubscribePanel from './SubscribePanel';
import Footer from './Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            nav {
              logo
              link {
                title
                url
              }
            }
            banner {
              title
              text
            }
            footer {
              copyright
              links {
                title
                url
              }
              social {
                title
                url
                icon
              }
            }
          }
        }
      }
    `}
    render={({ site = {} }) => {
      const { siteMetadata = {} } = site;
      const { nav, banner, footer } = siteMetadata;

      return (
        <>
          <Nav nav={nav} />
          <Banner title={banner.title} text={banner.text} />
          <Line />
          <main>{children}</main>
          {/* <SubscribePanel /> */}
          <Footer data={footer} />
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
