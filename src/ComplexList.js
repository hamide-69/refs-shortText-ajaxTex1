import React from 'react';

const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
  ,
  {
    id: 'c',
    firstname: 'mohsen',
    lastname: 'mirza',
    year: 1369,
  }
];

function  searchingFor(term) {
  return function (x) {
    return x.firstname.toLowerCase().includes(term.toLowerCase()) || x.lastname.toLowerCase().includes(term.toLowerCase())  || !term ;
 
  }
}

class ComplexList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list :list ,
      term:'' ,
    };
    this.serachHandler = this.serachHandler.bind(this);
  }

  serachHandler(event){
    this.setState({term: event.target.value})
  }

  render() {
    const{term,list}=this.state;
    return (
      <div className="App">
       <form>
         <input type="text" value={term} onChange={this.serachHandler} />
         </form> 
        {
list.filter(searchingFor(term)).map( list => 
   
    <div key={list.id}>
  <h1>{list.firstname}</h1>
  <h2>{list.lastname}</h2>
  <h3>{list.year}</h3>
    </div>
 )  
}

      </div>
    );
  }
}


export default ComplexList;
