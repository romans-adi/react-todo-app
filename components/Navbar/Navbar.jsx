import React, { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dropdown]);

  const toggleDropdown = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <button className="navbar-button" type="button" onClick={toggleDropdown}>
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul className="dropdown-menu" ref={ref}>
              <li className="navbar-item">
                <Link className="dropdown-link" to="/design" onClick={() => setDropdown(false)}>Design</Link>
              </li>
              <li className="navbar-item">
                <Link className="dropdown-link" to="/development" onClick={() => setDropdown(false)}>Development</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
