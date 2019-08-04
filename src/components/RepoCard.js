/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCode, IoIosGitNetwork, IoIosStar } from 'react-icons/io';

const RepoCard = ({ repo = {} }) => {
  const { title, description, language, stars, forks } = repo;
  return (
    <div className="Repo">
      <h2 className="Repo-title">{title}</h2>
      <div className="Repo-description">
        <p>{description}</p>
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
  );
};

RepoCard.propTypes = {
  repo: PropTypes.object,
};

RepoCard.defaultProps = {
  repo: {},
};

export default RepoCard;
