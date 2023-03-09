import styled from 'styled-components';
import background from '../../images/hero.jpeg';

export const HomeSection = styled.section`
  background-image: url(${background});
  height: 100vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 98%;
  @media screen and (min-width: 768px) {
    background-size: 99%;
  }
  @media screen and (min-width: 1200px) {
    background-size: 80%;
  }
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h1 {
    font-size: 32px;
    font-weight: 800;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 42px;
      font-weight: 800;
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;

    div {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    h1 {
      font-size: 56px;
      padding-left: 50px;
      padding-bottom: 20px;
    }
  }
`;
export const Title = styled.h1`
  animation: color-animation 4s linear infinite;
  font-weight: 800;
  font-size: 8.5vw;
  padding-top: 300px;
  text-shadow: 2px 2px 0px #ffffff, 7px 9px 0px rgba(0, 0, 0, 0.15);
  --color-1: red;
  --color-2: black;

  @keyframes color-animation {
    0% {
      color: var(--color-1);
    }
    25% {
      color: var(--color-1);
    }
    40% {
      color: var(--color-2);
    }
    65% {
      color: var(--color-2);
    }
    100% {
      color: var(--color-1);
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }
`;
