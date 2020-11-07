
import React from 'react'


class Refs extends React.Component {

  constructor(props) {
    super(props);

    this.username = React.createRef();
    this.password = React.createRef();
    
    this.state = {
      errors: [] ,
      submit:"submited" ,
    };
  }

  handleSubmit = (event) => {

    event.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    const errors = this.handleValidation(username, password);

    if (errors.length > 0) {
      console.log("aa")
      this.setState({ errors });
      return;
    }
      
    else if (errors.length == 0) {
     alert("data submitted")
     window.location.reload(false);
    }
   
     
    // Submit data
  };

  handleValidation = (username, password) => {
    const errors = [];
    const re = /^\S*$/;
    //  Require username to have a value on submit
    if (username.length == 0  || !re.test(username)) {
      errors.push("inter valid username");
    }
    else {

      this.setState({errors : []});

    }
    // Require at least six characters for the password
    if (password.length < 6 ) {
      errors.push("Password should be at least 6 characters long");
    }
    if (!re.test(password) ) {
      errors.push("inter valid password");
    }
    else {

      this.setState({errors: []});


    }
    console.log(errors.length)
    // If those conditions are met, then return error messaging
    return errors;
  };

  render() {
    const { errors } = this.state;
   

   

    return (
      
      <div className="col-md-8 offset-md-2 refs-box">
        <h1>React Ref Example</h1>
        <form onSubmit={this.handleSubmit}>
          {/* If requirements are not met, then display errors */}
          {errors.map(error => <p key={error}>{error}</p>)}
          <div>
       
            {/* // Input for username containing the ref */}
            <input type="text" ref={this.username} placeholder="Username" />
          </div>
          <div>
            {/* // Input for password containing the ref */}
            <input type="text" ref={this.password} placeholder="Password" />
          </div>
          <div>
            <button >Submit</button>



          </div>
        </form>
      </div>
    );
  }
}

export default Refs ;


// bedon ref 
/* import React from 'react'


class Refs extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      errors: [] ,
      username:"" ,
      password:"" ,
    };
  }
  handleChange = e =>{
    this.setState({  [e.target.name] : e.target.value  })
  }

  handleSubmit = (event) => {
    event.preventDefault();
   
    const errors = this.handleValidation(this.state.username, this.state.password);

    if (errors.length > 0) {
      console.log("aa")
      this.setState({ errors });
      return;
    }
      
    else if (errors.length == 0) {
     alert("data submitted")
     window.location.reload(false);
    }
   
     
    // Submit data
  };

  handleValidation = (username, password) => {
    const errors = [];
    const re = /^\S*$/;
    //  Require username to have a value on submit
    if (this.state.username.length == 0  || !re.test(this.state.username)) {
      errors.push("inter valid username");
    }
    else {
console.log("ss")
      this.setState({errors : []});

    }
    // Require at least six characters for the password
    if (this.state.password.length < 6 ) {
      errors.push("Password should be at least 6 characters long");
    }
    if (!re.test(this.state.password) ) {
      errors.push("inter valid password");
    }
    else {

      this.setState({errors: []});


    }
    console.log(errors.length)
    // If those conditions are met, then return error messaging
    return errors;
  };

  render() {
    const { errors } = this.state;
   

   

    return (
      
      <div className="col-md-8 offset-md-2 refs-box">
        <h1>React Ref Example</h1>
        <form onSubmit={this.handleSubmit}>
          {errors.map(error => <p key={error}>{error}</p>)}
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username}  onChange={this.handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="text" name="password" value={this.state.password}  onChange={this.handleChange} />
          </div>
          <div>
            <button >Submit</button>



          </div>
        </form>
      </div>
    );
  }
}

export default Refs ; */
