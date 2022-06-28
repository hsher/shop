import React, {createContext, StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

export const Context = createContext(null)

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <StrictMode>
      <App />
    </StrictMode>
  </Context.Provider>
);
