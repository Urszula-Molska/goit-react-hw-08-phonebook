import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'contactss',
  storage,
  whitelist: ['contactss'],
};

const reducer = combineReducers({
  contacts: contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
});
export const persistor = persistStore(store);
