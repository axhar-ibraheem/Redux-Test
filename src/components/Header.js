import classes from "./Header.module.css";

import { logout } from "../store/index";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
