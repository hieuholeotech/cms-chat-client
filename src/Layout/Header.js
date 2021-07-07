import React from 'react';
import { useReactOidc } from '@axa-fr/react-oidc-context';
import { Link } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  backgroundColor: '#fff',
  justifyContent: 'space-between',
  padding: 10,
  boxShadow: '0 10px 10px rgb(0 0 0 / 5%)'
};

const linkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontFamily: 'Roboto, sans-serif'
};

const ulStyle = {
  listStyleType: 'none',
  display: 'block',
  marginRight: '20px',
  marginBottom: '0'
}

const liStyle = {
  float: 'left',
  marginRight: '15px',
  lineHeight: '38px'
}

const Header = () => {
  const { isEnabled, login, logout, oidcUser } = useReactOidc();
  return (
    <header>
      <div style={headerStyle}>
          <Link style={linkStyle} to="/">
            HOME
          </Link>

        {oidcUser || !isEnabled ? (
          <ul style={ ulStyle }>
            <li style= { liStyle }>
              <Link style={linkStyle} to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li style= { liStyle }>
              <Link style={linkStyle} to="/admin">
                Admin
              </Link>
            </li>
            <li style= { liStyle }>
              <Link style={linkStyle} to="/chat">
                Chat
              </Link>
            </li>
            <button onClick={logout}>logout</button>
          </ul>
        ) : (
          <>
            <button onClick={login}>login</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
