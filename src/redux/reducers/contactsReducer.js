import {createReducer} from '@reduxjs/toolkit';

import actions from '../actions/phonebook-actions';

const contactsReducer = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.removeContact]: (state, { payload }) => state.filter((item) => item.id !== payload),
})

export default contactsReducer;