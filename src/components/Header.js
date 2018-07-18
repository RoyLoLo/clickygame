import React from "react";


const header = {
  background : "red",
  padding : "10px"
   
}

const h2 = {
  fontSize : "36px",
  color : "lemonchiffon",
  textAlign : "center"
}

const h3 = {
  fontSize : "36px",
  color : "white",
  textAlign : "center"
}

const Header = props =>
<div style={header}>
<h2 style={h2}> Click Game</h2>
<h2 style={h3}>Score:{props.score} || HighScore:{props.high}</h2>
</div>
;

export default Header;