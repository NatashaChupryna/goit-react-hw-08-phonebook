import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterSection, Container } from './Register.styled';

export default function Register() {
  return (
    <RegisterSection>
      <Container>
        <RegisterForm />
      </Container>
    </RegisterSection>
  );
}
