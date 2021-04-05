import { connect } from 'react-redux'

// import defaultImg from '../image/defaultImg.jpg'
import styles from './styles/PhoneBook.module.css';
import  fn from '../redux/actions/phonebook-actions'

const generateUniqueId = require('generate-unique-id');

const ContactList = ({ filter, contacts, handleDeleteContact }) => {
  
  const handleClickBtn = (ev) => handleDeleteContact(ev.target.id);
    const normolizedFilter = filter?.toLocaleLowerCase();
  
  const filteredContacts = contacts?.filter((contact) => contact.name.toLowerCase().includes(normolizedFilter))

  return (
    <div className={styles.contactList}>
      <ul>
        {filteredContacts &&
        filteredContacts.map((item) => (
          <li key={generateUniqueId()} className={styles.contactsItem} width="70px">
            {item.name}: {item.number}
            <button id={item.id} onClick={handleClickBtn } className={styles.listBtn}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.items,
    filter: state.filter
  }
}

const mapDispathcToProps = dispatch => {
  return {
    handleDeleteContact: (id) => dispatch(fn.removeContact(id)),
          }
}

export default connect(mapStateToProps, mapDispathcToProps) (ContactList);
