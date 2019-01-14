import React from 'react'

const Header = (props) => {
  return (
    <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#" onClick={props.handleHomeClick}  id="home">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input onKeyUp={props.handleSearch} id="filter" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <div className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-light ml-1 my-2 my-sm-0" id="cart" onClick={props.handleCartClick}>My Cart</button>
                </div>
            </div>
        </nav>
   </div>
  )
}

export default Header;