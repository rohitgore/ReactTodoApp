import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <nav className="navbar navbar bg-dark border-bottom border-body">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand">ToDo App</Link>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>  
    </>
  );
}

export default Header;
