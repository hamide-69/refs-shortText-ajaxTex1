import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';



class AddTxt extends Component {
  constructor(props){
    super(props)
    this.state={
      newItem:"",
      List:[]
    }
  }
updateInput(a,b){
  //update react state
  this.setState({
    [a]:b
  });
}



  addItem(){
    //creat id with unique id
    const newItem ={
      id: 1+ Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current List item
    const List=[...this.state.List];

    //add new item to list
    List.push(newItem);

    //update state new list and reset newItem input
    this.setState({
      List,
      newItem:""
    })
  }
 
  deletItem(id){
    //copy current list of items
    const List=[...this.state.List];

    //filter out item being deleted
    const updateList = List.filter(item => item.id !==id);

    this.setState({List: updateList});
  }

componentDidMount(){
  console.log('Component Mounted') ;
}

componentDidUpdate(prevProps,prevState){
  console.log('Component Update');
  console.log(prevProps,prevState)
}


  render(){
    return (
    <div className="App">
      Add an Item...
      <br/>

      <input type="text" placeholder="type Item here..."
       value={this.state.newItem}
        onChange={e => this.updateInput("newItem",e.target.value)}/>

        <button onClick={() =>this.addItem()} > Add </button>
<br/>
<ul>
{this.state.List.map(item =>{
  return(
    <li key={item.id}>
      {item.value}
      <button onClick={() => this.deletItem(item.id)}> X </button>
    </li>
  )
}
  )}


</ul>



        </div>
 
     
     );
  }
}

export default AddTxt;
