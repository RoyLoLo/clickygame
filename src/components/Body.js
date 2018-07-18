import React from "react";


const imgStyle ={
  height : "250px",
  width :  "250px",
  margin : "13px"
}
const Body = props => 
  
  (props.img.map(item=>(
      <img style={imgStyle} src={item.img} alt={item.name} key={item.id} onClick={()=>props.click(item.id)} click={props.clicked}/>
    ))
   )
  
export default Body;

