import { selectFilteredContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { AiOutlineDelete, AiFillPhone } from 'react-icons/ai';
import { Loader } from '../Loader/Loader';
import { FiUserCheck } from 'react-icons/fi';
import {
  List,
  Item,
  Wrapper,
  IconWrapper,
  Name,
  Number,
  Button,
} from './ContactsList.styled';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {isLoading && <Loader />}
      {contacts ? (
        contacts.map(contact => (
          <Item key={contact.id}>
            <Wrapper>
              <IconWrapper>
                <FiUserCheck size={18} color={'white'} />
              </IconWrapper>

              {/* <img src={contact.id} alt={contact.name} width={40} height={40} /> */}
              <Name>{contact.name} </Name>
            </Wrapper>
            <Wrapper>
              <a type="tel" href="tel:{contact.number}">
                <Number>
                  <AiFillPhone />
                  {contact.number}
                </Number>
              </a>

              <Button onClick={() => dispatch(deleteContact(contact.id))}>
                <AiOutlineDelete
                  style={{ fill: 'red', width: '16px', height: '20px' }}
                />
              </Button>
            </Wrapper>
          </Item>
        ))
      ) : (
        <span>та блін</span>
      )}
    </List>
  );
}
