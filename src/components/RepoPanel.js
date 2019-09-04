/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IoMdPlay } from 'react-icons/io';
import Loader from './Loader';
import RepoCard from './RepoCard';
import factory from './api';

const RepoPanel = () => {
  const [repos, setRepos] = useState([]);
  const [error = false, setError] = useState([]);
  const [loading = true, setLoading] = useState([]);
  const [loadingMore = false, setLoadingMore] = useState([]);
  const [page = 0, setPage] = useState([]);
  const [canLoadMore = true, setCanLoadMore] = useState([]);
  const perPage = 6;

  const siteData = useStaticQuery(graphql`
    query RepoQuery {
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

  // search/repositories?q=user:innovaccer&sort=stars
  const loadData = (p = 1) => {
    factory()
      .then(api => {
        return api.get(`orgs/${orgName}/repos`, {
          params: {
            type: 'sources',
            sort: 'updated',
            // page: 1,     // can be used if no cache is used
            // per_page: 6,
          },
        });
      })
      // uncomment to see the slow api response
      // .then(d => {
      //   return new Promise(resolve => {
      //     setTimeout(() => {
      //       resolve(d);
      //     }, 2000);
      //   });
      // })
      .then(({ data }) => {
        const currentPage = p + 1;
        const offset = currentPage * perPage;
        const list = data.slice(0, offset);
        setRepos(list);
        setPage(currentPage);
        setError(false);
        if (data.length < offset) {
          setCanLoadMore(false);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        setLoadingMore(false);
      });
  };

  useEffect(() => {
    loadData(page);
  }, []);

  const paginate = () => {
    setLoadingMore(true);
    loadData(page);
  };

  if (error === true) {
    return <div>Could not Load profiles.</div>;
  }

  const list = repos;
  return (
    <div className="Panel">
      <h1 className="Panel-title">Our Projects</h1>
      {loading && <Loader loading={loading} />}
      {!loading && (
        <div className="container container--gutter">
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
              <div key={`repo-${index}`} className="col-4">
                <RepoCard repo={repo} />
              </div>
            );
          })}
        </div>
      )}
      <div className="Panel-footer">
        {canLoadMore && loadingMore === true && <Loader />}
        {canLoadMore && !loadingMore && (
          <button type="button" className="LoadMore-button" onClick={paginate}>
            LOAD MORE
            <IoMdPlay className="LoadMore-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoPanel;
