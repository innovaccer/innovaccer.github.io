import React from 'react';
import '../styles/index.scss';
import Layout from '../components/Layout';
import ProfilePanel from '../components/ProfilePanel';
import RepoPanel from '../components/RepoPanel';

const IndexPage = () => {
  return (
    <Layout>
      <ProfilePanel />
      <RepoPanel />
    </Layout>
  );
};

export default IndexPage;
