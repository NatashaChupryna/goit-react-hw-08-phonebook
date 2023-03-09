import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginSection, Container } from './Login.styled';

export default function Login() {
  return (
    <LoginSection>
      <Container>
        <LoginForm />
      </Container>
    </LoginSection>
  );
}
