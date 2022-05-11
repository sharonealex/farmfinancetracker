import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import Test from './pages/Test'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="test" element={<Test />} />
      <Route path="signup" element={<SignUp />} />
     
      
    </Routes>
     </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
