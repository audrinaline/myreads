import React from 'react'
// import PropTypes from 'prop-types' //PropTypes allows to specify types of each props 
import Book from './Book'
import sortBy from 'sort-by' //have the books in a-z title L:3 SM

const Shelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books &&
          props.books.sort(sortBy("title")).map((book, index) => (
            <li key={ index }>
              <Book
                book={ book }
                backgroundImage={book.imageLinks ? 
                  book.imageLinks.thumbnail : null}
                handleShelf={props.handleShelf}
              />
            </li>
        ))}
      </ol>
    </div>
  </div>
)

export default Shelf