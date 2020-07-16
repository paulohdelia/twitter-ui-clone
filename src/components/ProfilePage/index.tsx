import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Paulo D'Elia</h1>
        <h2>@paulohdelia</h2>

        <p>
          Links to my{' '}
          <a
            href="https://github.com/paulohdelia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/in/paulodelia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de setembro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>93</strong>
          </span>
          <span>
            <strong>47 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
