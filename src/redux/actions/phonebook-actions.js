import { createAction } from '@reduxjs/toolkit';

const addContact = createAction("phonebook/add_contact")
const removeContact = createAction("phonebook/remove_contact")
const filterContacts = createAction("phonebook/filter_contacts")

export default {
    removeContact,
    addContact,
    filterContacts
};
