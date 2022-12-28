import React from "react";
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-DarkMode";
      // setInterval(()=>{
      // document.title='TextUtils is Amazing Mode';
      // },2000)
      // setInterval(()=>{
      //   document.title='leo messi';
      //   },1500)
    } 
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","succcess");
      document.title="TextUtils-LightMode";
    }
  }
  return (
    <>
    {/*<Navbar title="TextUtils" aboutText="About TextUtils" />*/}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route  path="/">
           <TextForm showAlert={showAlert} heading="Enter the text to analyze bro" mode={mode}/> 
          </Route>
    </Switch>
    </div>
     </Router>
 
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze bro" mode={mode}/> */}
    {/* <About/> */}
    {/* </div> */}
  
    </>
  );
}

export default App;
