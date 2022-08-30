import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  let counter_red=0;
  let counter_blue=0;
  let counter_green=0;
  const redBG=()=>{
    counter_red++;
    if(counter_red%2!==0)
    {
      document.body.style.backgroundColor='red';
    }
    else
    document.body.style.backgroundColor='white';
    };
    const blueBG=()=>{
    counter_blue++;
    if(counter_blue%2!==0) 
    document.body.style.backgroundColor='blue';
    else
    document.body.style.backgroundColor='white';
    
  }
  const greenBG=()=>{
    counter_green++;
    if(counter_green%2!==0)
    document.body.style.backgroundColor='green';
    else
    document.body.style.backgroundColor='white';
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>
          </ul>
          <span className="badge rounded-pill text-bg-danger my-1 mx-1" role='button' onClick={redBG}>Red BG</span>
          <span className="badge rounded-pill text-bg-primary my-1 mx-1" role='button' onClick={blueBG}>Blue BG</span>
          <span className="badge rounded-pill text-bg-success my-1 mx-1" role='button' onClick={greenBG}>Green BG</span>
            <div className={`form-check form-switch text-${props.mode=='light'?'grey':'white'} mx-2`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {                      //This is used to keep check on the type of props entered and display error on console.
  title: PropTypes.string.isRequired
}
Navbar.defaultProps = {                 //This is used when no props is passed and we want to display the default props.
  title: 'Enter Title Here'
}