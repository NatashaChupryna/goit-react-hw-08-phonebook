import styled from 'styled-components';

export const Header = styled.header`
  padding: 12px 0;
  background-color: #fefefe;
  border-bottom: 1px solid rgb(200, 200, 200);
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

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
