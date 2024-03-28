import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './utils/i18n'
import store from "./store/index.js";
import {Provider} from "react-redux";



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <Provider store = {store}>
          <Suspense fallback={<div>Loading...</div>}>
          <App />
          </Suspense>
      </Provider>
  </>,
)
