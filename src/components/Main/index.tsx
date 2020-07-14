import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Paulo D'Elia</strong>
          <span>334 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      {/* <BottomMenu>
          <HomeIcon />1
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </BottomMenu> */}
    </Container>
  );
};

export default Main;
