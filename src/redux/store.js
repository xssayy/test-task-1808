import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./user/slice";
import { campersReducer } from "./campers/slice";

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["favCampers"],
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    users: persistReducer(authPersistConfig, userReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
