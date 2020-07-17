import styled, { css } from 'styled-components';

import {
  Twitter,
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;
export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  padding: 8px 8px;
  outline: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 17px;
    }
  }

  & + button {
    margin-top: 16.5px;

    :last-child {
      margin-top: 33px;
      height: 40px;
      width: 40px;

      > span {
        display: none;
      }

      @media (min-width: 1280px) {
        width: 100%;
        height: unset;

        > span {
          display: inline;
        }
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  :hover {
    background-color: var(--twitter-dark-hover);
  }

  :hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  height: 30px;
  width: 30px;

  color: var(--white);
`;

export const Logo = styled(Twitter)`
  height: 37px;
  width: 37px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;

  @media (min-width: 1280px) {
    position: relative;
    left: 6px;
  }
`;
export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const BottomSide = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;
`;
export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;
export const ProfileData = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
    > span {
      color: var(--gray);
    }
  }
`;
export const ExitIcon = styled(ExitToApp)`
  display: none;
  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;
    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
