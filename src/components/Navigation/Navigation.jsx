import { IoMdHome } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Nav, StyledLink } from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <StyledLink to="/">
        <IoMdHome size={20} />
        Home
      </StyledLink>

      {isLoggedIn && <StyledLink to="/contacts">My contacts</StyledLink>}
    </Nav>
  );
}
