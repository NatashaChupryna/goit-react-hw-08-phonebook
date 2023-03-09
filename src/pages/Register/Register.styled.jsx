import styled from 'styled-components';
import background from '../../images/phone1.jpeg';

export const RegisterSection = styled.section`
  padding-top: 50px;
  background-image: url(${background});
  height: 100vh;
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 99%;
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
