import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  padding-top: 12px;
  padding-bottom: 12px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  margin-right: 20px;
  font-weight: 600;
  font-size: 14px;
  &.active {
    color: red;
  }
  &:hover {
    color: red;
    transition: 500ms ease;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
