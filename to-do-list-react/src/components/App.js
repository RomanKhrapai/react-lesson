import React, { Component } from "react";
import { render } from "react-dom";
import List from "./List";

class App extends Component {
state = {
inputValue:'',
arrayData: JSON.parse(localStorage.getItem('listItems'))
}

addBtnClick = (e)=>{
    this.addArrayData();
    this.saveLocalData();
}

hendleChange = (e)=>{
    const value = e.target.value;
    this.setState({
            inputValue: value
        })
}

addArrayData = () =>{  
    this.state.arrayData.push({
        id: new Date().getTime(),
        value: this.state.inputValue,
        checked: false
    })   
}

saveLocalData = ()=>{
    localStorage.setItem('listItems',JSON.stringify(this.state.arrayData) )
}

render(){
    return(
<div className='container border-dark'>
    <div> 
        <input className='input-group-text'
            value={this.state.inputValue}
            onChange={this.hendleChange}>        
        </input>
        <button className='btn' 
            onClick={this.addBtnClick}>
                add
        </button>
    </div>
    <List items = {this.state.arrayData}/>
</div>
    )
}

}

export default App