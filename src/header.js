import React from 'react';
import './App.css';
const Header = () => {

  return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light truee">
          <div className="container-fluid">
              <a className="navbar-brand" href="dashboard.html">
                       <svg style={{"vertical-align": "sub"}} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="rebeccapurple" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                          <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                      </svg>
                  <span style={{"font-size": "25px","color":"white"}}>Perambalur Rent House</span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
              <div className="navbar-right">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
<                    form className="form-inline my-2 my-lg-0">
                          <input className="form-control mr-sm-0" type="search" placeholder="Search Locations..." aria-label="Search"/>
                          <button className="btn btn-outline-success my-2 my-sm-2 mr-sm-2" type="submit">Search</button>
                          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                      </form>
                  </div>
              </div>
          </div>
          </nav>
        
     )


}


export default Header;