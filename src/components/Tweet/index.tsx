import React from 'react';

import {
  Container,
  Retweeted,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Paulo D'Elia</strong>
            <span>@paulohdelia</span>

            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>
            Todo o código do projeto tá la no meu{' '}
            <a
              href="https://github.com/paulohdelia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{' '}
            ✨
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              230
            </Status>
            <Status>
              <RetweetIcon />
              93
            </Status>
            <Status>
              <LikeIcon />
              3500
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
