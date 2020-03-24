

import React  from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
    const navStyle ={
        color:'#fff'
    };



            
    return (
      <nav className="col-md-3" >
       <div className="left-menu">   

          <img className="personal-img" src="https://www.itl.cat/pngfile/big/43-430987_cute-profile-images-pic-for-whatsapp-for-boys.jpg"   height='50px' width='50px'  ></img>
          <h1 className="Name">Hamideh Mohammadnian</h1>
          <h2 className="job"> React Front-End Developer</h2>
     
            <ul className="nav-links">
     <NavLink   activeClassName="navbar__link--active"  style={navStyle} to='/home'> <li>Home</li></NavLink>

    <NavLink activeClassName="navbar__link--active"  style={navStyle} to='/about'> <li>About</li></NavLink>

    <NavLink  activeClassName="navbar__link--active" style={navStyle} to='/gallery'> <li>Gallery</li></NavLink>
    <NavLink  activeClassName="navbar__link--active" style={navStyle} to='/portfolio'> <li>Portfolio</li></NavLink>

    <NavLink  activeClassName="navbar__link--active" style={navStyle} to='/addtxt'> <li>AddTxt</li></NavLink>

    <NavLink  activeClassName="navbar__link--active" style={navStyle} to='/ComplexList'> <li>List</li></NavLink>


    <NavLink  activeClassName="navbar__link--active" style={navStyle} to='/contact'> <li>Contact</li></NavLink>



    <NavLink  activeClassName="navbar__link--active" style={navStyle} to='/signup'> <li>signup</li></NavLink>
    
    <NavLink  activeClassName="navbar__link--active" style={navStyle} to='/fileupload'> <li>Uploade</li></NavLink>
    <NavLink  activeClassName="navbar__link--active" style={navStyle} to='/dashboard'> <li>Dashboard</li></NavLink>

    
          </ul>
          </div>   
          </nav>
    );
  
}

export default Nav;


/*

    
    if (!( localStorage.removeItem('token') &&
    localStorage.setItem('isLoggedIn', false) &&
    this.setState({ toDashboard: true } )) {
        dssf
    }
*/