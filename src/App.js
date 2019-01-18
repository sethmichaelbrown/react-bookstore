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

  componentDidMount = async () => {
    const response = await fetch('https://smb-collective-api.herokuapp.com/api/books')
    const json = await response.json()
    this.setState({ books: json })
  }


  labelPatchServer = async (inCart, book) => {
    await fetch('https://smb-collective-api.herokuapp.com/api/books', {
      method: 'PATCH',
      headers: {
        'Acawaitcept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "book.inCart": inCart,
        "book": book
      })
    })
  }

  handleAddClick = (event) => {
    const newState = { ...this.state }
    const findTitle = newState.books.find(item => item.title === event.target.id)
    findTitle.inCart = true

    this.labelPatchServer(true, findTitle)
    this.setState({ state: newState })
  }

  handleRemove = (event) => {
    const newState = { ...this.state }
    const findTitle = newState.books.find(item => item.title === event.target.id)
    findTitle.inCart = false
    this.state.cartTotal = (parseInt(newState.cartTotal - findTitle.price)).toFixed(2)

    this.setState({ state: newState })

  }

  handleSearch = (event) => {
    this.setState({ filterString: event.target.value.toLowerCase() })
  }

  handleCartClick = (event) => {
    if (event.target.id === "cart") {
      this.setState({ displayCart: true })
      let prices = []
      const inCartItems = this.state.books.filter(book => book.inCart)
      const inCartPrices = inCartItems.forEach(book => prices.push(book.price))
      const total = (prices.reduce((accum, el) => accum + el, 0)).toFixed(2)

      this.setState({ cartTotal: total })
    }
  }

  handleHomeClick = (event) => {
    if (event.target.id === "home") {
      this.setState({ displayCart: false })
    }
  }

  cartTotal = (event) => {
    if (event.target.id === "cart") {
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
          cartTotal={this.cartTotal} />

        {this.state.displayCart ?
          <Cart
            state={this.state.books}
            handleRemove={this.handleRemove}
            cartTotal={this.state.cartTotal} /> :
          this.state.books ?
            <Books bookList={this.state.books}
              handleAddClick={this.handleAddClick}
              filterString={this.state.filterString} /> :
            <Loading />
        }
        <Footer copyright="2019" />
      </div>

    );
  }
}

export default App;
