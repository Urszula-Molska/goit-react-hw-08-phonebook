export const getContacts = state => {
  if (state === undefined) {
    return;
  }
  return state.contacts.contacts;
};

export const getFilter = state => {
  if (state === undefined) {
    return;
  }
  return state.filter;
};

export const getError = state => state.error;
