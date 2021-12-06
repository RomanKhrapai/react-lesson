import React,{PureComponent} from 'react';
import articles from '../fixtures'
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent {
  state = {
    reverded:false
  }
  articles = articles.slice();
  render(){

    return (
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-3">
            App name
            <button className="btn btn-secondary" onClick = {this.revert}>Revert</button>
            </h1>
        </div>
        <ArticleList articles = {this.state.reverded ? articles.slice().reverse() :articles} />
      </div>
    ) 
  } 

  revert = () =>{
    this.setState({
    reverded:!this.state.reverded
  })}
  }

  export default App