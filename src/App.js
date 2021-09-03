import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form'
import Alert from './components/Alert';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,

} from "react-router-dom";
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
      <Router>
        <NavBar />
        <Alert txt={alert} />

{/* React Router */}
        <Switch>
          <Route exact path="/">
            <div className="container my-3">
              <h1>Enter a text here : </h1>
              <Form showAlert={showAlert} />
            </div>
          </Route>
            <Route exact path="/about" component={withRouter(About)} />

          
        </Switch>
      </Router>

    </>
  );
}

export default App;
