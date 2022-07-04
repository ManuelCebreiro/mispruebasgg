import React from "react";
import Card from "./card.jsx";


let arrCards = [<Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>];

const Wallpapper = (props) => {
    return (
    <div>
            <h1 id="text" className="atari">Bienvenido</h1>
            <button id="btn" className="atari">Start</button>
            <div class="row d-flex justify-content-center">{arrCards}</div>
            <div class="row d-flex justify-content-center">{arrCards}</div>
            <div class="row d-flex justify-content-center">{arrCards}</div>

    </div >
    )
}

export default Wallpapper



