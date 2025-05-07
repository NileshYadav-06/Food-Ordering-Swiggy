import { Component } from "react";

class ComponentClass extends Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            count1:1,
            // count2:2,
            // count3:3,
            // count4:4,
        }
    }

    render(){
        const{name,Age}=this.props;
        const{count,count1,count2,count3,count4}=this.state;

        const increase=()=>{
            this.setState({
                count: this.state.count + 1,
                count1: this.state.count1 + 1
                // it will only update defined state variable ,It do not touch undefined state variable 
            })
        }
        return<>
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <button onClick={()=> increase()}>Count Increase</button>

        <h1>{name}</h1>
        <h2>{Age}</h2>
        
        </>
    }
}

export default ComponentClass;

/*
Classs based Components are made up of three diffrent methods -
       1. constructor() - used to recieve props,declaring state variables
       2. componentDidMount() - used to make API calls.
       3. render() - returns some piece of JSX.
 
Execution(Lifecycle) cycle of CBC -
 
      1.At first constructor() method is executed.
      2.then render() method is executed
      3.After the render() method completes its execution componentDidMount() mrthod is called


Parent child relationships - 
 (A) ==> if another child component(CBC) is nested in parent component(CBC) with all three methods then-
 their lifecycle will be like--

      1.Parent constructor()
      2.Parent render()
      3.child constructor()
      4.child render()
      5.child componentDidMount()
      6.Parent componentDidMount()

 (B) ==>if multiple child component(CBC) are nested in parent component(CBC) with all three methods then
 their render method and componentDidMount methods will be batched to achieve optimization.

  their lifecycle will be like--

      1.Parent constructor()
      2.Parent render()

      3.first child constructor()
      4.first child render()
      5.second child constructor()
      6.second child render()

      7.first child componentDidMount()
      8.second child componentDidMount()

      9.Parent componentDidMount()
*/