import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RutaPrivada from "./components/auth/RutaPrivada";

import Login from "./components/auth/Login";
import Register from './components/auth/Register';
import View from './components/view/View';

import AuthState from './context/auth/authState';
import AlertaState from './context/alert/alertState';

function App() {
  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/" element={<RutaPrivada />}>
              <Route path="/view/*" element={<View />} />
            </Route>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
