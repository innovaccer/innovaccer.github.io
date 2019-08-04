/* eslint-disable react/no-array-index-key */
import React from 'react';
import useAxios from 'axios-hooks';
import Loader from './Loader';
import RepoCard from './RepoCard';

const RepoPanel = () => {
  const [{ data, loading, error }] = useAxios(
    'https://github.com/search/repositories?q=user:innovaccer&sort=stars'
  );
  if (error) {
    return <div>Could not Load profiles.</div>;
  }
  if (loading) {
    return <Loader loading={loading} />;
  }
  const list = data.items.filter(d => !d.fork).slice(0, 4);
  return (
    <div className="Panel">
      <h1 className="Panel-title">Our Projects</h1>
      <div className="container">
        {list.map((
          // eslint-disable-next-line camelcase
          { name, description, forks, language, html_url, stargazers_count },
          index
        ) => {
          const repo = {
            title: name,
            description,
            language,
            stars: stargazers_count,
            forks,
            url: html_url,
          };
          return (
            <div key={`repo-${index}`} className="col-6">
              <RepoCard repo={repo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepoPanel;
