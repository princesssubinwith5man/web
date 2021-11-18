import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/firestore";
// 라우팅 추가
import { BrowserRouter } from 'react-router-dom';

var firebaseConfig = {
  apiKey: "AIzaSyAL0HSLG5hUdu49H742LauKt6ywfLc-mcM",
  authDomain: "princesssuvinand6dwarf.firebaseapp.com",
  projectId: "princesssuvinand6dwarf",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
