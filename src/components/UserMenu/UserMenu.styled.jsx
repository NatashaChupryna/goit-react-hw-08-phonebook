import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Greet = styled.p`
  display: flex;
  align-items: baseline;
  gap: 2px;
  font-size: 14px;
  font-weight: 600;
  span {
    color: red;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 12px;
  border: none;
  outline: none;
  font-size: 16px;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  transition: 300ms ease;

  @media screen and (min-width: 768px) {
    span {
      display: inline-flex;
    }
  }

  &:hover,
  &:focus {
    color: red;
  }
`;
