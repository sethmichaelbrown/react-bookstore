import React from 'react'

const Book = (props) => {
    const price = (props.book.price).toFixed(2)

    return (
        <div className="Book">
            <div className="book-list">
                <div className="collection-item container">
                    <div className="row">
                        <div className="col-md-6">
                            <h6>{props.book.title}</h6>
                            <p>{props.book.subtitle} </p>
                        </div>
                        <div className="col-md-2">{props.book.author}</div>
                        <div className="col-md-2">{`$${price}`}</div>
                        <div className="col-md-2 mx-auto align-middle">
                            <button id={props.book.title} onClick={props.handleAddClick} type="button" className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Book;