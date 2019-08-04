import React from 'react';
import '../styles/index.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ProfileCard from '../components/ProfileCard';
import RepoCard from '../components/RepoCard';
import Line from '../components/Line';
import RepoPanel from '../components/RepoPanel';
import ProfilePanel from '../components/ProfilePanel';
import SubscribePanel from '../components/SubscribePanel';

const Page = () => (
  <div>
    <Nav nav={{ logo: '', link: { title: 'Inno', url: '' } }} />
    <Banner
      title="open source"
      text={[
        'OUT WITH CLOSED DEV WORKFLOW.',
        'IN WITH THE FREEDOM TO COLLABORATE',
      ]}
    />
    <Line />
    <ProfilePanel />
    <RepoPanel />
    <ProfileCard
      profile={{
        name: 'Satyam yadav',
        userName: 'satyam',
        avatar: 'https://avatars0.githubusercontent.com/u/3583587?s=460&v=4',
        stars: 5,
        social: {
          twitter: '',
          github: '',
        },
      }}
    />
    <RepoCard
      repo={{
        title: 'Measure definition',
        description:
          'Measure Definition and ConfigurationMeasure Definition and ConfigurationMeasure Definition.',
        language: 'scala',
        stars: 4,
        forks: 5,
      }}
    />
    <SubscribePanel />
    <Footer />
  </div>
);
export default Page;
