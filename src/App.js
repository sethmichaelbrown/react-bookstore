import React, { Component } from 'react';
import Header from './components/Header'
import Books from './components/Books'
import Loading from './components/Loading'
import Footer from './components/Footer'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  state = {
    filterString: '',
    inCart: false,
  }

  componentDidMount = async() => {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json})
  }

  handleClick = (event) => {
    const findTitle = this.state.books.find(item => item.title === event.target.id)
    findTitle.inCart = true 
  }

  handleSearch = (event) => {
    this.setState({filterString: event.target.value.toLowerCase()})
  }

  render() {
    return (
      <div className="App">
        <Header title="Musty's Books" handleSearch={this.handleSearch}/>
          {this.state.books ? 
          <Books bookList={this.state.books} handleClick={this.handleClick} filterString={this.state.filterString}/> : 
          <Loading />  
          }
        <Footer copyright="2019"/>
      </div>

    );
  }
}

export default App;
