import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { currentUser } = props;
  return (
    <header>
      <Link to="/">
        <h1 className="header-logo">Apartment Fix</h1>
      </Link>
      {/* only shows the newissue link if a user is logged in */}
      {currentUser && (
        <>
          <Link to="/newissue">
            <h3>(new issue)</h3>
          </Link>
        </>
      )}

      {/* checks if the user is logged in to determine whether which link is displayed */}
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={props.handleLogout}>logout</button>
          <Link to="/useredit">
            <button>edit</button>
          </Link>
        </div>
      ) : (
        <Link to="/login">Login/Register</Link>
      )}
    </header>
  );
}

export default Header;
