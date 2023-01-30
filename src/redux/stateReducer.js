const INITIAL_STATE = {
  changeContacts: null,
};
const changeContactsState = (state, action) => ({
  ...state,
  changeContacts: action.payload,
});
function changeContactsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'changeContacts': {
      return changeContactsState(state, action);
    }
    default:
      return state;
  }
}
export default changeContactsReducer;
