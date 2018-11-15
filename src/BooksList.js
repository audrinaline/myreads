import React from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types' //PropTypes allows to specify types of each props 
import Shelf from './Shelf'


//books list here with categories
const BooksList = props => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>
      	{props.title}
      </h1>
    </div>
    <div className="list-books-content">
      <div>
        <Shelf
          title="Currently Reading"
          handleShelf={props.handleShelf}
          books={props.books.filter(book => book.shelf === 'currentlyReading')}
        />
        <Shelf
          title="Want To Read"
          handleShelf={props.handleShelf}
          books={props.books.filter(book => book.shelf === 'wantToRead')}
        />
        <Shelf
          title="Read"
          handleShelf={props.handleShelf}
          books={props.books.filter(book => book.shelf === 'read')}
        />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
)

export default BooksList
