import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from './components/auth/Register';
import ViewTest from './components/view/NavBar';
import ListPosts from './components/view/ListPosts';
import ListPhotos from './components/view/ListPhotos';

import AuthState from './context/auth/authState';
import AlertaState from './context/alert/alertState';

function App() {
  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Routes>
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
            <Route path="view" element={<ViewTest />} />
            <Route path="posts" element={<ListPosts />} />
            <Route path="photos" element={<ListPhotos />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
