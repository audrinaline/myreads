import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'
import SearchBook from './SearchBook'

class BooksApp extends Component {
  state = {
    books: [],
    // query: ''
  }

 //componentDidMount() call BooksAPI after the component mounted to the page
 //this.setState update local changes from L3: State Management 
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

//update the BooksAPI when shelf and books changes
//concat() merge arrays
 handleShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update({ id: book.id }, book.shelf).then(() =>
      this.setState((prevState) => {
        return {
          books: prevState.books.filter(b => b.id!==book.id).concat([book])
        }
      })
    )
  }


  //render() run components
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksList
            books={this.state.books}
            handleShelf={this.handleShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBook
            books={this.state.books}
            handleShelf={this.handleShelf}
          />
        )}/>
      </div>
    )
  }
}


//FIGURE OUT HOW TO ADD HISTORY FOR '/SEARCH'

export default BooksApp
