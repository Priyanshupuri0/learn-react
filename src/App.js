import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{ useState } from 'react';
import Alerts from './Components/Alerts';
import About from './Components/About';
import EventHandlerBinding1 from './Components/EventHandlerBinding1'
import EventHandlerBinding2 from './Components/EventHandlerBinding2'
import EventHandlerBinding3 from './Components/EventHandlerBinding3';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ListRendering from './Components/ListRendering';
function App() {
  const [mode, setmode] = useState('light');
  const [showAlert, setshowAlert] = useState(null);
  const setAlert=(message,type)=>{
    setshowAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setshowAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#51585f';
      setAlert("Dark mode is set!","success");
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      setAlert("Light mode is set!","success");
    }
  }
  return (
    <Router>
    <Navbar title="MyReact"  mode={mode} toggleMode={toggleMode} />
    <Alerts alert={showAlert}/>
    <div className="container">
           {/* <EventHandlerBinding1/>
           <EventHandlerBinding2/>
           <EventHandlerBinding3/> */}
           {/* <ListRendering/> */}
    <Routes>
          <Route path="about" element={<About />}/>
          <Route path="/" element={<TextForm heading="Enter the text below to Analyze: " mode={mode} alert={setAlert} />}/>
    </Routes> 
    </div>
    </Router>
  );
}

export default App;
