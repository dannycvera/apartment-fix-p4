import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { currentUser } = props;
  return (
    <header>
      <Link to="/">
        <h1 className="header-logo">
          {`Apartment
           Fix`}
        </h1>
      </Link>
      <div className="nav">
        {/* only shows the newissue link if a user is logged in */}
        {currentUser && (
          <div className="links">
            <Link to="/newissue">
              <h4>(new issue)</h4>
            </Link>
            <Link to="/all">
              <h4>(all issues)</h4>
            </Link>
          </div>
        )}

        {/* checks if the user is logged in to determine whether which link is displayed */}
        {currentUser ? (
          <div className="login">
            <p>{currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
            <Link to="/useredit">
              <button>edit user</button>
            </Link>
          </div>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
