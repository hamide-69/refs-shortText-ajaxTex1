import React from 'react';
import {Animated} from "react-animated-css";

const list = [
  {
    src: 'https://images.unsplash.com/photo-1544598615-516e02c8c5cd?ixlib=rb-1.2.1&w=1000&q=80',
    title: 'Image 1',
    id: 'a',
    desc: 'Wordpress Website',
  
  },
  {
    src: 'https://images.unsplash.com/photo-1544598615-516e02c8c5cd?ixlib=rb-1.2.1&w=1000&q=80',
    title: 'Image 3',
    id: 'a',
    desc: 'Wordpress Website',
  },
  {
    src: 'https://images.unsplash.com/photo-1571727226062-18a510ab1211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=1000&q=80',
    title: 'Image 2',
    id: 'a',
    desc: 'Wordpress Website',
  },
  ,
  {
    src: 'https://images.unsplash.com/photo-1544598615-516e02c8c5cd?ixlib=rb-1.2.1&w=1000&q=80',
    title: 'Image 3',
    id: 'a',
    desc: 'Wordpress Website',
  }, {
    src: 'https://images.unsplash.com/photo-1571727226062-18a510ab1211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=1000&q=80',
    title: 'Image 2',
    id: 'a',
    desc: 'Wordpress Website',
  },
  {
    src: 'https://images.unsplash.com/photo-1544598615-516e02c8c5cd?ixlib=rb-1.2.1&w=1000&q=80',
    title: 'Image 1',
    id: 'a',
    desc: 'Wordpress Website',
  
  },
];

function  searchingFor(term) {
  return function (x) {
    return x.desc.toLowerCase().includes(term.toLowerCase()) || x.desc.toLowerCase().includes(term.toLowerCase())  || !term ;
 
  }
}

class Portfolio extends React.Component {
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
      <div className="App row portfolio">
     
        {
list.filter(searchingFor(term)).map( list => 
    <Animated  className="col-md-4"  animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>

    <div className="portfolio-item" key={list.id}>
      <img src={list.src} width="300" height="200" />
      <div className="overly">
   <h6>{list.title}</h6>
   <p>{list.desc}</p>
</div>
    </div>
    </Animated >
 )  
}

      </div>
    );
  }
}


export default Portfolio;
