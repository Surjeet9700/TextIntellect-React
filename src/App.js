import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/about.js';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}

      <Navbar title="TextIntellect" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      
        {/* <Route path="/about">
          <About />
        </Route> */}
        
            <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />  
        
      


      </div>
      <footer>
        <hr />
        <p className='center'>made by <span>surjeet</span> buy me <span>coffee</span>  ☕</p>
      </footer>

    </>
  );
}

export default App;