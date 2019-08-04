/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import axios from 'axios';
import Loader from './Loader';
import ProfileCard from './ProfileCard';

const getContributions = list => {
  const props = list.items.map(repo => {
    return (
      axios
        .get(`https://github.com/repos/innovaccer/${repo.name}/contributors`)
        // .then(res => res.json())
        .then(contributions => console.log(contributions))
    );
  });
  return Promise.all(props);
};

const ProfilePanel = () => {
  const [repos, setRepos] = useState([]);

  const [{ data, loading, error }] = useAxios(
    'https://github.com/orgs/innovaccer/public_members'
  );

  // const [{ data: repos, loading: loadingRepos, error: errorRepos }] = useAxios(
  //   'https://api.github.com/search/repositories?per_page=32&page=1&q=user:innovaccer&sort=stars'
  // );

  axios
    .get(
      'https://github.com/search/repositories?per_page=32&page=1&q=user:innovaccer&sort=stars'
    )
    .then(res => res.data)
    .then(getContributions)
    .then(contri => {
      console(contri);
      setRepos(repos);
    })
    .catch(console.error);

  if (error) {
    return <div>Could not Load profiles.</div>;
  }
  if (loading) {
    return <Loader loading={loading} />;
  }
  return (
    <div className="Panel">
      <h1 className="Panel-title">Top contributors</h1>
      <div className="Flex-holder">
        {// eslint-disable-next-line camelcase
        data.slice(0, 5).map(({ login, avatar_url, html_url }, index) => {
          const profile = {
            username: login,
            avatar: avatar_url,
            social: { github: html_url },
          };
          return <ProfileCard key={index} profile={profile} />;
        })}
      </div>
    </div>
  );
};

export default ProfilePanel;
