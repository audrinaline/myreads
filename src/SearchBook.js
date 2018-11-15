import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {
  state = {
    results: [],
    input: ''
  }

  onInputChange = input => {
    this.setState({ input })
    this.getBooks( input )
  }

//L5:MALWRR
  getBooks = query => {
    BooksAPI.search(query).then((books) => {
      if(query.length === 0) {
        this.setState({ results: [] })
      }
      if(!!books){
        if(books.length > 0){
          const results = books.map(book => {
            const existingBook = this.props.books.find(b => b.id === book.id)
            book.shelf = !!existingBook ? existingBook.shelf : 'none'
            return book
          });
          this.setState({ results })
        }
        else {
          this.setState({ results: [] })
        }
      }
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={e => this.onInputChange(e.target.value)}
              value={this.state.input}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book, index) => (
              <li key={index}>
                <Book
                  book={book}
                  backgroundImage={book.imageLinks ? book.imageLinks.thumbnail : ""}
                  handleShelf={this.props.handleShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook