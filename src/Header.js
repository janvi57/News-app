import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './design.css';

class Header extends Component {
   render() {
       return (
           <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Technology">Technology</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Education">Education</a>
                    </li>
                    </ul> 
                </div>
                </nav>
                </>
       );
   }
}

export default Header;