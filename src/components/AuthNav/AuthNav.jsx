import { Nav, StyledLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <Nav>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Sign In</StyledLink>
    </Nav>
  );
}
