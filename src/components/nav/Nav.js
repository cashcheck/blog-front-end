import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Controller";
import "./nav.css";

function Nav() {
  const user = useContext(UserContext);

  if (!user.user) {
    return (
      <div className="nav_bar">
        <Link to="/register">register</Link>
        <Link to="/login">login</Link>
        <button onClick={user.logout}>logout</button>
      </div>
    );
  } else {
    return (
      <div className="nav_bar">
        <Link to="/protected">protected</Link>
      </div>
    );
  }
}

export default Nav;
