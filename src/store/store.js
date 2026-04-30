import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsSlice'
import usersReducer from './userSlice'
import storage from "redux-persist/lib/storage";
import { persistStore,persistReducer } from "redux-persist";

console.log(storage)
const persistConfig = {
    key: 'root', 
    storage: storage.default || storage,
    whitelist: ["posts", "users"]
}

const rootReducer = {
    posts: postsReducer,
    users: usersReducer
}

const persistedReducer = persistReducer(persistConfig, (state, action) => {
    return {
        posts: rootReducer.posts(state?.posts, action), 
        users: rootReducer.users(state?.users, action)
    }
})


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
})

export const persistor = persistStore(store);