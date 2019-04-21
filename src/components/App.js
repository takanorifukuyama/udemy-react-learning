import React, { Component } from 'react';
import SearchForm from "./SearchForm"
import '../App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  
  handlePlaceSubmit = place => {
    console.log(place);
    
  }
  render() {
    return (
      <div className="App">
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place=>this.handlePlaceSubmit(place)}/>
      </div>
    );
  }
}

export default App;
