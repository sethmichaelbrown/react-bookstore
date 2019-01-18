import React from 'react'
import CartItem from './CartItem'
import Total from './Total'


const Cart = (props) => {
    let count = 0

    return (
        <div className="Cart">
            <div className="container mt-4">
                <h1>My Cart</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-6">Title</div>
                            <div className="col-md-2">Author</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Remove</div>
                        </div>
                    </div>
                    {props.state.map(book => book.inCart ?
                        <div className="list-group-item mt-1"><CartItem book={book} id={count++} handleRemove={props.handleRemove} /></div>
                        : "")}
                </div>
                <Total cartTotal={props.cartTotal} />
            </div>
        </div>
    )
}


export default Cart;