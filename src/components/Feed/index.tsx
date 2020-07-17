import React from 'react';

import { Container, Tabs, Tab, Tweets } from './styles';

import Tweet from '../Tweet';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>
        <Tab className="active">Tweets</Tab>
        <Tab>Tweets e respostas</Tab>
        <Tab>Mídia</Tab>
        <Tab>Curtidas</Tab>
      </Tabs>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
