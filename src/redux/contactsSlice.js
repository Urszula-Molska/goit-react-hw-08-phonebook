import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const initialState = {
  contacts: [],
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.fulfilled](state, action) {
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.fulfilled](state, action) {
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
