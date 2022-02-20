import { useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const[Mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert('Dark mode is enabled', 'success');
    }else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode is enabled', 'success');

    }
  };

  return (
      <>
      {/* <Router>
       <Navbar title="TextUtils" mode={Mode} toogleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container mt-5">
         
         }
          <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/" >
            <TextForm heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert}/>
          </Route>
        </Switch>
        </div>
        </Router> */}
        <Navbar title="TextUtils" mode={Mode} toogleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container mt-5">
        <TextForm heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert}/>
        </div>
      </>
  );
}

export default App;


