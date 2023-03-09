import { RxExit, RxHeart } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Nav, Button, Greet } from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Nav>
      <Greet>
        <span>
          <RxHeart />
        </span>
        Hello, {user.name}
      </Greet>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <RxExit size={20} />
      </Button>
    </Nav>
  );
}
