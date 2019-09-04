/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCode, IoIosGitNetwork, IoIosStar } from 'react-icons/io';

const RepoCard = ({ repo = {} }) => {
  const { title, description, language, stars, forks, url } = repo;
  const repoDescription =
    description && description.length > 70
      ? `${description.slice(0, 70)} ...`
      : description;
  return (
    <a className="link-card" href={url} target="__blank">
      <div className="Repo">
        <h3 className="Repo-title">{title}</h3>
        <div className="Repo-description">
          <p>{repoDescription}</p>
        </div>
        <div className="Repo-footer">
          <div className="Repo-icon">
            <IoMdCode />
            <span className="Repo-label">{language}</span>
          </div>
          <div className="Repo-icon">
            <IoIosStar />
            <span className="Repo-label">{stars}</span>
          </div>
          <div className="Repo-icon">
            <IoIosGitNetwork />
            <span className="Repo-label">{forks}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.object,
};

RepoCard.defaultProps = {
  repo: {},
};

export default RepoCard;
