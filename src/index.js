import React from 'react';
import App from './App';
import { AuthProvider } from './context/Authprovider';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './reducer/store'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
