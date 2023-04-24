import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App /> */}
<BrowserRouter>
  <Routes>
   <Route exact path="/" element={<Login/>}></Route>
    <Route exact path="/App"  element={<App/>}></Route>
    <Route path="register" element={<Register/>}></Route>
  </Routes>
</BrowserRouter>
    
  </React.StrictMode>
);
