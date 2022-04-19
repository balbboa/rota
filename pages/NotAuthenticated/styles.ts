import styled from 'styled-components';
import { shade } from 'polished';

// import notAuthenticatedBackground from '../../assets/not-authenticated-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  transition: width 0.5s;

  @media (min-width: 768px) {
    width: 414px;
    margin: auto;
  }

  img {
    width: 200px;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 340px;

    h4 {
      color: #c2c2c2;
      font-weight: 500;
      text-align: center;

      &:last-of-type {
        margin-bottom: 32px;
      }
    }

    p {
      margin: 16px 0 8px;
      color: #666360;
      font-size: 14px;
    }

    button[type='submit'] {
      margin-top: 16px;
    }

    button + a {
      display: block;
      margin-top: 24px;
      color: ${props => props.theme.color.primary};
      text-align: center;
      transition: color 0.2s;

      &:hover {
        color: ${props => shade(0.2, props.theme.color.primary)};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;

    color: ${props => props.theme.color.primary};
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${props => shade(0.2, props.theme.color.primary)};
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  z-index: -10;
  background: url(../../assets/not-authenticated-background.png) no-repeat;
  background-size: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
