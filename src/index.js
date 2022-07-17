import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state'
// import { addPost, updateNewPostText } from "./redux/state";
// import { subscribe } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderFunction(state) {
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App
               state={state}
               dispatch={store.dispatch.bind(store)}
            />
         </BrowserRouter>
      </React.StrictMode>
   );

}

renderFunction(store.getState());
store.subscribe(renderFunction);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
