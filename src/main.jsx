import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import UserContextProvider from './context/UserContextProvider'
import { Provider } from 'react-redux'
import { store, persistor } from "./store/store.js";
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading..</h1>} persistor={persistor}>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
