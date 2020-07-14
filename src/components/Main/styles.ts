import styled from 'styled-components';
import { ArrowLeft } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);
  /* width: 100%;
  max-width: 601px; */

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.header`
  z-index: 2;
  position: sticky;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;

    cursor: pointer;

    &:hover {
      background-color: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  height: 24px;
  width: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;
