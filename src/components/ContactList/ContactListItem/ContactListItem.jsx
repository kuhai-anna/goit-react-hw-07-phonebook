import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Contact,
  ContactItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <Contact>
        <ContactName>{name}: </ContactName>
        <ContactNumber> {phone}</ContactNumber>
      </Contact>
      <DeleteButton type="button" onClick={onDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
