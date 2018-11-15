import React from 'react'
//import PropTypes from 'prop-types' //PropTypes allows to specify types of each props 

const Book = props => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.backgroundImage}")` }}></div>
      <div className="book-shelf-changer">
        <select
          onChange={e => props.handleShelf(props.book, e.target.value)}
          defaultValue={props.book.shelf}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.author}</div>
  </div>
)

export default Book