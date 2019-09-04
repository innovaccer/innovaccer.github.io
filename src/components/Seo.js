/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query seoQuery {
        site {
          siteMetadata {
            title
            description
            author
            lang
            keywords
          }
        }
      }
    `
  );

  const metaDescription = site.siteMetadata.description;
  const {
    siteMetadata: { title, lang, keywords = [] },
  } = site;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
      ]}
    >
      <link rel="preconnect" href="https://api.github.com" />
    </Helmet>
  );
}

export default SEO;
