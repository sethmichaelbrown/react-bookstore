import React from 'react'
import Book from './Book'

const Books = (props) => {
    let count = 0
    
    const filterString = props.filterString.toLowerCase()
    const filteredObj = props.bookList.filter(book => (book.title.toLowerCase().includes(filterString)))

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
                    {!props.filterString ?
                        props.bookList.map(book => <div className="list-group-item mt-1"><Book book={book} handleClick={props.handleClick} id={count++}/></div>):
                        filteredObj.map(book => <div className="list-group-item mt-1"><Book book={book} handleClick={props.handleClick} id={count++}/></div>)
                    }
                </div>
            </div>
        </div>
    )
}


export default Books;

