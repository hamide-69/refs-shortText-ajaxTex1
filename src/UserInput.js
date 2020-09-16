import React from "react"
import UserOutput from './UserOutput'


class UserInput extends React.Component {
constructor(props){
    super(props)
}

    render(){
        return(
            <div>
                    <input type="text"  name="username" value={this.props.currentName} onChange={this.props.changed} />
            </div>
            )
    }
  

}
export default UserInput 


// import React from "react"
// import UserOutput from './UserOutput'


// const UserInput = (props) => {

//     return(
//     <div>
//             <input type="text"  name="username" value={props.currentName} onChange={props.changed} />
//     </div>
//     )

// }
// export default UserInput 
