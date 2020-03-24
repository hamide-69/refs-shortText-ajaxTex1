import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'

class Admin extends React.Component {
  
    render() {
        return (
            <div>
             <h1>just loggined user can see this page</h1>   
             <Link to="/logout">Logout</Link>
            </div>
        );
    }
}

Admin.propTypes = {};

export default Admin;
