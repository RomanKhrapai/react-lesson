import React,{ Component} from "react";
import './style.css'
import ListItem from "./ListItem";

export default class List extends Component{
    state = {

    }

    render(){
const listItem = this.props.items.map(item => 
    <li key = {item.id} className="list__item">
        <ListItem 
            valueText={item.value} 
            checked={item.checked}
        />
    </li>
    
    )

        return(       
        <ul>
            {listItem}
            </ul>
            
            )
    }
}