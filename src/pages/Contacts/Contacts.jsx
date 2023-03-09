import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactsList';
import { ContactsSection, Container, ContactWrapper } from './Contacts.styled';

export default function Contacts() {
  return (
    <ContactsSection>
      <Container>
        <ContactWrapper>
          <ContactForm />
          <Filter />
          <ContactList />
        </ContactWrapper>
      </Container>
    </ContactsSection>
  );
}
