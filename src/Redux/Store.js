import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import localForage from "localforage";
import userReducer from "./Slices/userSlice";
//for sidebar
import isOpenReducer from "./Slices/isOpenSlice";

// Create a persist config
const persistConfig = {
    key: 'user',
    storage: localForage, //use locallforage as the storage engine
};

//create a persistedReducer
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: persistedReducer,
        isOpen: isOpenReducer, //for sidebar
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            //Ignore these action types
            ignoredActions: ["persist/PERSIST"],
        },
    }),
});

//CREATE A PERSISTOR
export const persistor = persistStore(store);