import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import contactsReducer from "./reducers/contactsReducer";
import filterReducer from "./reducers/filterReducer";

const contactsPersistConfig = {
  key: 'contacts',
    storage,
  blacklist: ['filter']
}

const persistedReducer = persistReducer(contactsPersistConfig, combineReducers({
    items: contactsReducer,
    filter: filterReducer
}))
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),logger]

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware,
 
});

  const persistor = persistStore(store)


export default { store, persistor };