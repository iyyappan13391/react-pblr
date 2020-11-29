import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import LoginModal from './modal/loginmodal';

const Header = () => {

    const [modalShow, setModalShow] = useState(false);
    
     return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light truee">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">
                       <svg style={{"verticalAlign": "sub"}} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="rebeccapurple" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                          <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                      </svg>
                  <span style={{"fontSize": "25px","color":"white"}}>Perambalur Rent House</span>
                 
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
              </button>
              {/* <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <NavLink  exact activeClassName="activeClassMenu" to="/">Search House</NavLink>
                    </li>
                    <li className="nav-item active">
                    <NavLink exact activeClassName="activeClassMenu" to="/list">List</NavLink>
                    </li>
                    <li className="nav-item active">
                    <NavLink exact activeClassName="activeClassMenu" to="/details">Details</NavLink>
                    </li>
                </ul> */}
              <div className="navbar-right">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
<                    form className="form-inline my-2 my-lg-0">
                          <input className="form-control mr-sm-0" type="search" placeholder="Search Locations..." aria-label="Search"/>
                          <button className="btn btn-outline-success my-2 my-sm-2 mr-sm-2" type="submit">Search</button>
                          <Button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => setModalShow(true)}>Login</Button>
                          <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
        
                      </form>
                      
                  </div>
              </div>
          </div>
          </nav>
        
     )


}


export default Header;