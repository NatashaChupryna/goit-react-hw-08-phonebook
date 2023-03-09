import styled from 'styled-components';
import background from '../../images/phone.jpg';

export const ContactsSection = styled.section`
  padding: 36px 0;
  height: 100vh;
  background-image: url(${background});
  background-position: top right -100px;
  background-repeat: no-repeat;
  background-size: 70%;
  @media screen and (min-width: 768px) {
    background-size: 99%;
    background-position: top right;
  }
  @media screen and (min-width: 1200px) {
    background-size: 40%;
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

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  margin: 0 auto;
  width: 99%;
  background-color: transparent;
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    width: 510px;
  }
`;
