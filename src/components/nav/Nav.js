import { useContext } from "react";
import { UserContext } from "../Controller";
import "./nav.css";
import NavGuest from "./NavGuest";
import NavUser from "./NavUser";

function Nav() {
  const user = useContext(UserContext);

  if (!user.user) {
    return <NavGuest />;
  } else {
    return <NavUser />;
  }
}

export default Nav;
