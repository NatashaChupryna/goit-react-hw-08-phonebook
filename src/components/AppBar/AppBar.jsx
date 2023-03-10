import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header, Container, StyledNav } from './AppBar.styled';

export function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Container>
        <StyledNav>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </StyledNav>
      </Container>
    </Header>
  );
}
