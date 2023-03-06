import { Toaster } from 'react-hot-toast';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Title } from '../components/App.styled';


export default function Contacts() {

  return (
    <>
      <Title>Phonebook</Title>

      <ContactForm></ContactForm>

      <Title>Contacts</Title>

      <Filter></Filter>

      <ContactList/>


      <Toaster />
    </>
  );
}
