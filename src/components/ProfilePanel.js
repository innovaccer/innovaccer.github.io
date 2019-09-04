/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Loader from './Loader';
import ProfileCard from './ProfileCard';
import factory from './api';

const getContributions = (orgName, list) => {
  const props = list.map(repo => {
    return factory()
      .then(api => {
        return api.get(`repos/${orgName}/${repo.name}/contributors`);
      })
      .then(({ data = {} }) => {
        return data;
      });
  });
  return Promise.all(props).then(repos => {
    const contributors = repos.reduce((o, users) => {
      users.forEach((u = {}) => {
        if (o[u.login]) {
          o[u.login] = { ...u, contribution: u.contribution + 1 };
        } else {
          o[u.login] = { ...u, contribution: u.contributions || 1 };
        }
      });
      return o;
    }, {});
    return contributors;
  });
};

const ProfilePanel = () => {
  const [contributors, setContributors] = useState([]);
  const [error = false, setError] = useState([]);
  const [loading = true, setLoading] = useState([]);

  const siteData = useStaticQuery(graphql`
    query ProfileQuery {
      site {
        siteMetadata {
          orgName
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { orgName },
    },
  } = siteData;

  useEffect(() => {
    factory()
      .then(api => {
        return api.get(`orgs/${orgName}/repos`, {
          params: {
            type: 'sources',
            sort: 'updated',
          },
        });
      })
      .then(res => res.data)
      .then(getContributions.bind(null, orgName))
      // uncomment to see the slow api response
      // .then(d => {
      //   return new Promise(resolve => {
      //     setTimeout(() => {
      //       resolve(d);
      //     }, 2000);
      //   });
      // })
      .then(contri => {
        const users = Object.values(contri)
          .sort((a, b) => b.contributions - a.contributions)
          .slice(0, 5);
        setContributors(users);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (error === true) {
    return <div>Could not Load profiles.</div>;
  }

  return (
    <div className="Panel">
      <h1 className="Panel-title">Top contributors</h1>
      {loading && <Loader loading={loading} />}
      {!loading && (
        <div className="Flex-holder">
          {contributors.map(
            ({ login, avatar_url, html_url, contributions }, index) => {
              const profile = {
                username: login,
                avatar: avatar_url,
                social: { github: html_url },
                contributions,
                profileURL: html_url,
              };
              return <ProfileCard key={index} profile={profile} />;
            }
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePanel;
