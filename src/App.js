import React , {Component}from "react";
import Counter from './Components/Counter'
import './App.css';
import image from './Pict1.png';





class App extends Component {
  
  state = {
    name: "Wael Ben Abderrahmen",
    Profession:'Editor',
    Bio:'Never miss the time',
    image:{image},
    show:true
  };

  handleClick(){
    if(!this.state.show){
      this.setState({
       name: "Wael Ben Abderrahmen",
       Profession:'Editor',
       Bio:'Never miss the time',
       image:{image},
       show:true
      });
    }else{
      this.setState({
      name: "",
      Profession:'',
      Bio:'',
      image:'',
      show:false   
      });
    }
  }

  

  render() {
    return(
      
      <div className="App">
      <img src={image} alt=""/>
      <h1>{this.state.name}</h1>
      <h1>{this.state.Profession}</h1>
      <h1>{this.state.Bio}</h1>
      <Counter/>

      <button onClick={()=>this.handleClick()}> Show/Hide</button>
      </div>
 
    )}
 }
export default App;