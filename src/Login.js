import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import Admin from './Admin'


class Login extends React.Component {
    constructor(props) {
        super(props)

          this.state = {
username:'',
password:'',
LoggedIn:true

        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

        
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    submitForm(e){
        e.preventDefault()
        const{username , password }= this.satat

        if(username ==="A" && password==="B") {
            this.setState({
                LoggedIn: true
            })
        }
 
    }


    render() {
 
        if(this.state.loggedIn == true){
                return <Redirect to="/admin" />
                
               }
                return (
            <div>
                <h1>Loggin</h1>
                <form inSubmit={this.submitForm}>
                    <input type="text" placeholder="username" name="username" value={this.state.name} onChange={this.onChange}/>
                <br/>
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                <br/>
                <input type="submit"  />
             
                </form>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
