import React from 'react'
import Book from './Book'

const Books = (props) => {
    return(
        <div className="CartItems">
        <div className="container mt-4">
          <h1>Books</h1>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-6">Title</div>
                <div className="col-md-2">Author</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Add to Cart</div>
              </div>
            </div>
            
            {props.bookList.map(book => <div className="list-group-item mt-1"><Book book={book}/></div>)}
          </div>
        </div>
      </div>
    )
}


export default Books;

