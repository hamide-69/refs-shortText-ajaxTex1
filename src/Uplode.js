import React ,{Component} from 'react';
 import axios from 'axios'


class Uplode extends Component {
state = {
    selectedFile :null
}
    fileSelectHandler = event =>{
this.setState({
    selectedFile:(event.target.file[0])

})

}

    fileUploadHandler =() =>{


    }

    render(){

        return(
            <div>

<input type="file" onChange={this.fileSelectHandler}  />

<button onClick={this.fileUploadHandler}>upload</button>

             </div>   
        )
    }
}

export default Uplode