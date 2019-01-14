import React, { Component } from 'react';
import Header from './components/Header'
import Books from './components/Books'
import Loading from './components/Loading'
import Cart from './components/Cart'
import Footer from './components/Footer'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  state = {
    filterString: '',
    displayCart: false,
    cartTotal: 0
  }

  componentDidMount = async() => {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json})
  }

  handleAddClick = (event) => {
    const findTitle = this.state.books.find(item => item.title === event.target.id)
    findTitle.inCart = true 
    // const newState = {...this.state}
    // console.log(newState)
    // console.log(event.target.id)
    // const thing = findTitle.inCart
    // this.setState({thing: true})
  }

  handleRemove = (event) => {
    const findTitle = this.state.books.find(item => item.title === event.target.id)
    const thing = findTitle.inCart
    this.setState({thing: false})
  }

  handleSearch = (event) => {
    this.setState({filterString: event.target.value.toLowerCase()})
  }

  handleCartClick = (event) => {
    if(event.target.id === "cart"){
      this.setState({displayCart: true})
      let prices = []
      const inCartItems = this.state.books.filter(book => book.inCart)
      const inCartPrices = inCartItems.forEach(book => prices.push(book.price))
      const total = (prices.reduce((accum, el) => accum + el, 0)).toFixed(2)

      this.setState({cartTotal: total })
    }
  }

  handleHomeClick = (event) => {
    if(event.target.id === "home"){
      this.setState({displayCart: false})    
    }
  }

  cartTotal = (event) => {
    if(event.target.id === "cart"){
      console.log(this.state)
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="Musty's Books" 
            handleSearch={this.handleSearch} 
            handleCartClick={this.handleCartClick} 
            handleHomeClick={this.handleHomeClick}
            cartTotal={this.cartTotal}/>
          
          {this.state.displayCart ?
            <Cart 
              state={this.state.books}
              handleRemove={this.handleRemove}
              cartTotal={this.state.cartTotal}/> : 
              this.state.books ? 
                <Books bookList={this.state.books} 
                        handleAddClick={this.handleAddClick} 
                        filterString={this.state.filterString}/> : 
                <Loading />
            }
        <Footer copyright="2019"/>
      </div>

    );
  }
}

export default App;
