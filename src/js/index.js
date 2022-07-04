import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Wallpapper from "../js/walpapper.jsx";
import Card from "../js/card.jsx";


let arrCards = [<Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>];


let btn = document.querySelector("#btn")
let text = document.querySelector("#text")

function disable(){ 
    /*btn.remove();
    text.remove();*/
    btn.style.display = "none";
    text.style.display = "none";
}

/*btn.addEventListener("click", disable)*/

ReactDOM.render(<Wallpapper/>, document.querySelector("#myGame"));
ReactDOM.render(arrCards, document.querySelector("#row1"));

