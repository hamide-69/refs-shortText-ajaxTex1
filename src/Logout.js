import React from 'react';
import PropTypes from 'prop-types';
import {link} from 'react-router-dom'
import Login from './Login'


class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
<h1>You loggout</h1>
<link to="/login">Login</link>
            </div>
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
