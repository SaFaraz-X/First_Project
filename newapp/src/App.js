import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe_results: [],
      netflix_result: "",
      recipe_link: "https://www.food2fork.com/api/search?key=c7bb731e2fbd795d64316b905bed8368&q=",
      recipe_search: ""
    };
  }

  getRecipeSearch = (e) =>{
    this.setState({
      recipe_search: e.target.value
    });
  };


  doSearchRecipe = () =>{
    console.log(this.state.recipe_search);
    this.setState({
      recipe_link: this.state.recipe_link + this.state.recipe_search
    });
    console.log(this.state.recipe_link);
    /*axios
      .get(recipe_link)
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
      });  */
  };

  addRecipe = (link) => {
    
  };

  /*getNetflix = () =>{
    axios
      .get("https://reelgood.com/roulette/netflix")
      .then(response=>{

      })
      .catch(error =>{
        console.log(error);
      });  
  };
*/
/*
let x = document.getElemenyByIs("form1");
          let recipe_search = 
*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <input onChange={e=>this.getRecipeSearch(e)} size = "30"></input>
          <br></br>
          <button onClick={()=>this.doSearchRecipe()}>Find Recipe</button>

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
