import React, { Component } from "react";
import axios from "axios";
import { Button } from 'antd';

export default class ButtonBar extends Component {
    



    render(){
        return(
            <div>
                 <button onClick={() => this.doSearchRecipe()}>MOVIE/SHOW</button>
                 <button onClick={() => this.getNetflix()}>FOOD</button>

            </div>
        );
    }
}  