import React,{Component} from "react";


class Counter extends Component{

  constructor(props){
    super(props)
    this.state={
      count : 0
    }
  }
   
 

  render(){
    const {count}=this.state
    return (
      <h1> Counter :{count}</h1>
    )
  }

  componentDidMount(){
    this.myInterval = setInterval(()=>{
      this.setState(prevState =>({
        count:prevState.count+1
      }))
    },1000);
  }

}
export default Counter;
  