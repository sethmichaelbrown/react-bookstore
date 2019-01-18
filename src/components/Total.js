import React from 'react'

const Total = (props) => {

    return (
        <div className="Total mt-2 inline-el container">
            <div className="row container">
                <div className="col-md-10 mt-2 mb-2">
                    <h4 className="inline-el">Total: ${props.cartTotal}</h4>
                </div>
                <div className="col-md-2 container mx-auto align-middle">
                    <button className="btn btn-success inline-el" type="button">Purchase</button>
                </div>
            </div>
        </div>
    )
}

export default Total;