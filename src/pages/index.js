import React from 'react';
import '../styles/index.scss';
import Layout from '../components/Layout';
import ProfilePanel from '../components/ProfilePanel';
import RepoPanel from '../components/RepoPanel';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <ProfilePanel />
      <RepoPanel />
    </Layout>
  );
};

export default IndexPage;
