import React, { Component } from 'react'
import farmer from '../farmer.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light fixed-top bg-dark flex-md-nowrap p-0 shadow">

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
