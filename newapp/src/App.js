import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe_name: "",
      netflix_result: "",
      recipe_api: "",
      recipe_image:"",
      recipe_link:"",
      href_text: ""
    };
  }

  //obtain text from input field
  getRecipeSearch = (e) =>{
    let search = e.target.value;
    let newLink = "https://www.food2fork.com/api/search?key=c7bb731e2fbd795d64316b905bed8368&q=" + search;
    this.setState({
      recipe_api: newLink 
    });
  };


  doSearchRecipe = () =>{ 
      axios
      .get(this.state.recipe_api)
      .then(response => {
        console.log(response)
        if(response.data.recipes.length == 0) {
          console.log("SAD");
        }
        this.setState({
          recipe_name: response.data.recipes[0].title,
          recipe_image: response.data.recipes[0].image_url,
          recipe_link: response.data.recipes[0].source_url,
          href_text: "Link to Recipe For " + response.data.recipes[0].title
        });
        console.log(this.state.recipe_name);
        console.log(this.state.recipe_link);
        // let pics = response.data.collection.items
        // pics.forEach(pic => {
        //   if(pic.links){
        //     this.addPic(pic.links[0].href);
        //   }
        // });
        console.log("images!")
      })
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

    // let pics = []
    // pics = this.state.recipe_results;
    // let images = []
    // if(pics.length > 1){
    //   images = pics.map(pic => {
    //     return <img src = {pic} />;
    //   })
    // }

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <input onChange={e=>this.getRecipeSearch(e)} size = "30"></input>
          <br></br>
          <button onClick={()=>this.doSearchRecipe()}>Find Recipe</button>
          {this.state.recipe_name} <br></br>
          <img src={this.state.recipe_image}></img> <br></br>
          <a href={this.state.recipe_link}> {this.state.href_text}</a>
         

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
