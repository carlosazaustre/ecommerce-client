import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">Redux Ecommerce</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"><span className="fa fa-shopping-cart"></span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
