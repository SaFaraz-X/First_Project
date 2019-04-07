import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {


  doSearch = () =>{
    axios
      .get("")
      .then(response=>{
        let recipes = response.data.collection.items
        recipes.forEach(recipe =>{
          if(recipe.links){
            this.addRecipe(recipe.links[0].href);
          }
        });
        console.log("it worked!");
      })
      .catch(error =>{
        console.log(error);
      });  
  };

  addRecipe = (link) => {
    
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
