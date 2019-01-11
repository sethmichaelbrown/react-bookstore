import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">&copy; {this.props.copyright}</a>
        </nav>
      </div>
    );
  }
}

export default Footer;