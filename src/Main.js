import React from 'react'
import ComplexList from './ComplexList'
import Search from './Search'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText:'hello'
        };
    }

filterUpdate(value){
    this.setState({
        filterText: value
    })
}


    render() {

    console.log('filterText state from parent component' , this.state.filterText) 

        return (
            <div>
              <Search filterText={this.state.filterText}
              filterUpdate={this.filterUpdate.bind(this)}
              />
                <ComplexList list={this.props.list} />  
             </div>
        );
    }
}

 
export default Main;









