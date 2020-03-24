import React ,{Component} from 'react';
import {Form,FormGroup,Input,Label,Button} from 'reactstrap'
import axios from 'axios'


class Contact extends Component {

  
  constructor(){
    super()

    this.state={
      name:'',
      email:'',
      message:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = e =>{
    this.setState({  [e.target.name] : e.target.value  })
  }



  canBeSubmitted() {
    const { email, name , message } = this.state;
    return email.length > 0 && name.length > 0 && message.length > 0;
    }
  

async handleSubmit(e) {

  if (!this.canBeSubmitted()) {
    
    e.preventDefault();
    return;
  }
  const { email, name,message } = this.state;
  alert(`Dear ${name} Thanks for your message` );
  
 


  const form = await axios.post('/api/Form',{
    name,
    email,
    message
  })

}

 

  render(){

    const isEnabled = this.canBeSubmitted();

    
    
    return (
      

        <div className="contacts row">

<h1 className="col-md-12 contact-title1">get in touch </h1>
<h1 className="col-md-12 contact-title2">Contact Us </h1>

<div className="col-md-4" >
<p><b><i class="fas fa-envelope-open" /></b> mohammadi.sut@gmail.com</p>
<p><b><i class="fas fa-mobile-alt" /></b> 09198281622</p>
<a href="@hamidehmd"><p><b><i class="fab fa-instagram-square"/></b> @hamidehmd</p></a>


</div>

<Form  className="col-md-6 col-md-offset-2 col-md-pull-2" onSubmit={this.handleSubmit}  style={{textAlign:"left",margin:' 29px auto 59px auto ' } }>

  <FormGroup>
  <Input type="text" placeholder="Name" name="name"  onChange={this.handleChange}   />
  </FormGroup>

  <FormGroup>
  <Input type="text" placeholder="Email" name="email" onChange={this.handleChange}   />
  </FormGroup>

  <FormGroup>
  <Input type="textarea" placeholder="Message" name="message" onChange={this.handleChange}  />
  </FormGroup>

<button disabled={!isEnabled} >SEND MESSAGE</button>

</Form>


        </div>
    );
  }
}

export default Contact;
