import React from 'react'
import { Link } from 'react-router-dom'
import tem from '../components/icon/th.png'
export default function Navbar(props) {
  return (
    <div>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='white'?'light':'dark'} bg-${props.mode==='white'?'light':'dark'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><h2><img src={tem} alt="pic" />SkyCast</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Tempapp">Search weather</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/About">About</Link></li>
            <button className="btn btn-primary"onClick={props.enabledm} htmlFor="flexSwitchCheckDefault"> {props.a}</button>
            <li><hr className="dropdown-divider"/></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}
