// import { useState } from 'react';
import { connect } from 'react-redux'

import styles from './styles/PhoneBook.module.css';
import fn from '../redux/actions/phonebook-actions'


const Filter = ({ filter, handleFilterValue }) => {
  
  return (
    <label className={styles.findField}>
      Find contacts by name:{' '}
      <input
        type="text"
        name=""
         value={filter}
        onChange={handleFilterValue}
        className={styles.findInput}
      />
    </label>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispathcToProps = dispatch => {
  return {
    handleFilterValue: (event) => dispatch(fn.filterContacts(event.target.value))
          }
}
export default connect(mapStateToProps, mapDispathcToProps)(Filter);

