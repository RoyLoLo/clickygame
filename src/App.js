import React, {Component}  from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import images from "./images.json";

let clicked = [];
let score = 0;
let high = 0;
 class App extends Component {
  
  state = {
    score,
    images,
    high,
  };

  endGame = () =>{
    alert("Game Over");
    if(this.state.high<this.state.score){
      this.setState({high:this.state.score});
      clicked=[];
      this.setState({score:0})
    }
    
  };
  
  shuffle = (array)=>{
    let i = array.length-1;
    for (;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
    return array;
  };

  imgClick = (id) =>{
    this.setState({images:this.shuffle(this.state.images)})
    
    if(this.state.score % 16 ===0){
      clicked=[]
    }
    
    if(clicked.indexOf(id) === -1){
      this.setState({score:this.state.score+1}); 
      clicked.push(id);
    }else{
    this.endGame();
   }
  
  };



  render(){
    return(
      <div>
      <Header score={this.state.score} high={this.state.high}/>
      <Body img={this.state.images} click={this.imgClick}/>
      </div>
    );
  }
      
  }
 export default App;