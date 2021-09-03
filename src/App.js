import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form'
import Alert from './components/Alert';
import React, { useState } from 'react';

import About from './components/About';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (txt) => {
    setAlert(txt);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <NavBar />
      <Alert txt={alert} />
      <div className="container my-3">
        <h1>Enter a text here : </h1>
        <Form showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
