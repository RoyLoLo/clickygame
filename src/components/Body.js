import React from "react";


const imgStyle ={
  height : "200px",
  width :  "200px",
  margin : "10px"
}
const Body = props => 
  
  (props.img.map(item=>(
      <img style={imgStyle} src={item.img} alt={item.name} key={item.id} onClick={()=>props.click(item.id)} click={props.clicked}/>
    ))
   )
  
export default Body;

